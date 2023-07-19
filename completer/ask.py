import os
import re
import json
import openai
from typing import List

openai.api_key = os.environ.get("OPENAI_API_KEY")

inschema = json.load(open('./resources/introspectionSchema.json', 'r'))
sample_queries = json.load(open('./resources/sample_queries.json', 'r'))


class Completer:
    def __init__(self, model="text-davinci-003", max_tokens=100):
        self.model = model
        self.max_tokens = max_tokens

    def response(self, prompt: str) -> str:
        response = openai.Completion.create(
            model=self.model,
            prompt=prompt,
            max_tokens=self.max_tokens,
            stop=["###"]
        )
        return response.choices[0].text.strip()


class RelevantSDL:
    def __init__(self):
        global inschema
        global sample_queries
        self.inschema = inschema
        self.sample_queries = sample_queries

    def most_relevant_sample_query(self, user_input: str) -> str:
        prompt = f"Sample Queries:\n{str(self.sample_queries)} ### Return the query that is most similar to this question:\n{user_input} ###"
        sample_query = Completer().response(prompt)
        return sample_query

    def match_inschema_types(self, sample_query: str) -> List[str]:
        matches = []
        sample_query_words = set(sample_query.split(' '))
        for type_ in dict(self.inschema['_typeMap']).keys():
            if type_ in sample_query_words:
                matches.append(type_)
        return matches

    @staticmethod
    def match_sdl_types(schema_types: List[str]) -> str:
        with open('./resources/schema.graphql', 'r') as file:
            sdl = file.read()
        matches = []
        for type_ in schema_types:
            match = re.search(f"type {type_} {{[^}}]*}}", sdl, re.MULTILINE | re.DOTALL)
            if match:
                matches.append(match.group(0).replace('\n', ''))
        return '\n'.join(matches)

    def get(self, user_input: str) -> tuple:
        sample_query = self.most_relevant_sample_query(user_input)
        schema_types = self.match_inschema_types(sample_query)
        return sample_query, self.match_sdl_types(schema_types)


class Ask:
    def __init__(self, user_input: str):
        self.user_input = user_input
        self.sample_query, self.relevant_sdl = RelevantSDL().get(self.user_input)

    def query(self):
        prompt = f"""
            GraphQL SDL schema types:\n'{self.relevant_sdl}' ###
            Example GraphQL query:\n'{self.sample_query}' ###
            Translate the following question into a GraphQL query:\n'{self.user_input}' ###
        """
        print(prompt)
        response = Completer().response(prompt)
        return response
