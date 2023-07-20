import json
from completer.completions import ChatCompleter
from completer.sdlschema import SDLSchema

sample_queries = json.load(open('./resources/sample_queries.json', 'r'))


class Chat:
    def __init__(self):
        global sample_queries
        self.sample_queries = 'QUERY '.join([f"Question: {i['description']} Answer: {i['query']}" for i in sample_queries])
    
    def generate_messages(self, user_input):
        return [
            { "role": "user", "content": f"Define a schema with object types: {SDLSchema().sdl}" },
            { "role": "user", "content": f"The following queries return correct results: {self.sample_queries}" },
            { "role": "user", "content": f"Return only the query block for the following question: {user_input}" }
        ]

    def query(self, user_input):
        return ChatCompleter().response(messages=self.generate_messages(user_input))


