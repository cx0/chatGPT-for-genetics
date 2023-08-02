import json
import uuid
from datetime import datetime
from pathlib import Path
from completer.completions import ChatCompleter
from completer.sdlschema import SDLSchema
from completer.opentarget import OpenTargetHandler
from typing import List
from typing import Dict


def load_sample_queries() -> List[str]:
    sample_queries = json.load(open('./resources/sample_queries.json', 'r'))
    return [f"Question: {i['description']} Answer: {i['query']}" for i in sample_queries]


class Chat:
    def __init__(self):
        self.sample_queries = 'QUERY '.join(load_sample_queries())
        self.uuid = str(uuid.uuid4())
        self.timestamp = datetime.now().strftime("%Y%m%d%H%M")
    
    def save_to_disk(self, response: str, dirtype: str) -> None:
        filename = self.uuid + "_" + self.timestamp + ".json"
        workspace_directory = Path(f"logs/{dirtype}/")
        file_path = workspace_directory / filename
        with open(file_path, 'w') as file:
            file.write(response)
    
    def generate_suggestion_messages(self, user_input: str) -> List[Dict]:
        return [
            { "role": "user", "content": f"Define a schema with object types: {SDLSchema().sdl}" },
            { "role": "user", "content": f"The following queries return correct results: {self.sample_queries}" },
            { "role": "user", "content": f"Return only the query block for the following question: {user_input}" }
        ]

    def suggest(self, user_input: str) -> str:
        suggestion = ChatCompleter().response(messages=self.generate_suggestion_messages(user_input))
        # self.save_to_disk(suggestion, 'suggestions')
        return suggestion
    
    def complete(self, user_input: str) -> str:
        suggestion = self.suggest(user_input)
        query_result = OpenTargetHandler().query(suggestion)
        # self.save_to_disk(query_result, 'results')
        return suggestion, query_result
    
    def generate_query_interpretation(self, user_input: str, query_result: str) -> List[Dict]:
        return [
            { "role": "user", "content": f"Consider the following query result from OpenTargets API: {query_result}" },
            { "role": "user", "content": f"Succintly interpret the query result as it relates to the following question: {user_input}" },
            { "role": "user", "content": f"If the query result contains a list of entities, then generate only tabluar output with no other text included." }
        ]
    
    def interpret(self, user_input: str) -> str:
        suggestion, query_result = self.complete(user_input=user_input)
        response = ChatCompleter().response(messages=self.generate_query_interpretation(user_input, query_result))
        # self.save_to_disk(response, 'interpretations')
        return suggestion, response