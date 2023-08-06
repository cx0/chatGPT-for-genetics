import os
import openai
from typing import List


openai.api_key = os.environ.get("OPENAI_API_KEY")


class ChatCompleter:
    def __init__(self, model="gpt-3.5-turbo-16k-0613", max_tokens=1000):
        self.model = model
        self.max_tokens = max_tokens
        
    def response(self, messages: List[dict]) -> str:
        response = openai.ChatCompletion.create(
            model=self.model, 
            messages=messages,
            max_tokens=self.max_tokens,
            temperature=0,
            top_p=0.5,
            frequency_penalty=0,
            presence_penalty=0,
            stop=["###"]
        )
        return response['choices'][0]['message']['content']