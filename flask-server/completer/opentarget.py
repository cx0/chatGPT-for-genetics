import requests
import json
from completer.utils import extract_values


class OpenTargetHandler:
    def __init__(self):
        global extract_values
        
        self.base_url = "https://api.platform.opentargets.org/api/v4/graphql"
    
    def post(self, query_string: str) -> dict:
        try:
            response = requests.post(self.base_url, json={"query": query_string})
            response.raise_for_status()
        except requests.exceptions.HTTPError as err:
            print(err)
        return dict(json.loads(response.text))['data']
    
    def resolve_search_key(self, results_dict: dict) -> dict:
        endpoints = ['disease', 'target', 'drug', 'evidence', 'search']
        if results_dict is None:
            raise(Exception(f"No valid search key found in POST response from URL: {self.base_url}"))
        for i in endpoints:
            if i in results_dict.keys():
                return i
    
    def query(self, query_string: str) -> dict:
        result = self.post(query_string=query_string)
        search_key = self.resolve_search_key(results_dict=result)
        return json.dumps(extract_values(result, search_key))
