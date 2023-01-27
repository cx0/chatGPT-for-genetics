import os
import re
import json
import requests
import openai
from datetime import datetime
from utils import extract_values

# read Open AI API key from environment variable
openai.api_key = os.environ.get("OPENAI_API_KEY")

# Open Targets graphQL schema example
# read from file
with open("graphql_schema.txt", "r") as f:
    prompt_template = f.read()

# Prime the target query for completion
prime_prompt = "query top_n_associated_diseases {\n  search(queryString:"

# Custom input by the user
# user_input = "Find the top 2 diseases associated with BRCA1"
user_input = input("How can I help you today?\n")

response = openai.Completion.create(
    model="code-davinci-002",
    prompt=prompt_template + "### " + user_input + "\n" + prime_prompt,
    temperature=0,
    max_tokens=250,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0,
    stop=["###"],
)
response_text = response["choices"][0].text

query_string = prime_prompt + response_text

# filename with current date and time
query_file = "query_" + datetime.now().strftime("%Y_%m_%d-%I_%M_%S_%p") + ".txt"

# write query to file with current date and time
with open(query_file, "w") as f:
    f.write(f"# User input: {user_input}\n")
    f.write(query_string)
    print(f"\nCustom graphQL query was written to file: {query_file}")

# Set base URL of GraphQL API endpoint
base_url = "https://api.platform.opentargets.org/api/v4/graphql"

# Perform POST request and check status code of response
# This handles the cases where the Open Targets API is down or our query is invalid
try:
    response = requests.post(base_url, json={"query": query_string})
    response.raise_for_status()
except requests.exceptions.HTTPError as err:
    print(err)

# Transform API response from JSON into Python dictionary and print in console
api_response = json.loads(response.text)
hits_list = api_response["data"]["search"]["hits"][0]

print("\n\nQuerying Open Targets genetics database...\n\n")

disease_list = extract_values(hits_list, "disease")
for i, j in enumerate(disease_list):
    print(f"{i+1}. {j['name']}")
