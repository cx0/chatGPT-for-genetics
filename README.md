## chatGPT for genetics

This is the code repo for my submission at [Scale AI Generative AI & LLM hackathon](https://twitter.com/alexandr_wang/status/1610361991830331392) last week. Please feel free to fork or submit PR for feature request.

### Demo

Q: What's the disease / phenotype associated with gene of my interest?

![Asking Open Targets questions about gene-phenotype associations.](demo.svg)

### Motivation

### Inspiration

I really liked [BirdSQL](https://twitter.com/perplexity_ai/status/1603441221753372673) - Perplexity AI's GPT-based search engine using OpenAI Codex to translate natural language to SQL queries to navigate Twitter. Make sure to check it out yourself [here](https://www.perplexity.ai/sql). Great choice to showcase the capabilities of their search engine and very impressive implementation overall!

### Implementation

As you can see with BirdSQL, [OpenAI's Codex tool](https://www.youtube.com/watch?v=SGUCcjHTmGY) does a wonderful job translating natural language to SQL queries. OpenAI suggests specific prompt templates to improve the generated text response. For text-to-SQL code completion task, they suggest to prompt the model with SQL tables and their properties. I was curious to find out whether Codex models are capable of translating text to graphQL queries given a similar schema.

```
Input  : prompt template with schema + user query
Model  : code-davinci-002 Codex model
Output : user query in graphQL syntax
```

Once we have a valid graphQL query, we can submit this query to the relevant API endpoint provided by [Open Targets Platform GraphQL](https://platform-docs.opentargets.org/data-access/graphql-api) and relay the response to the user. This approach did not work well. Codex model populated unnecessary extra fields that resulted in invalid graphQL queries.

Instead, providing an [illustrative example graphQL query](graphql_schema.txt) was sufficient for Codex to produce a decent text-to-graphQL translation that plays nicely with Open Target graphQL API. Demo code in this repo used this approach. I'm looking forward to exploring other prompt and fine-tuning strategies to improve text-to-graphQL translation for a wide range of Q&A tasks where there is a well-structured domain-specific graphQL API available.

### TODO

- [ ] SQL-to-graphQL direct translation may be a better option?
- [ ] Expand prompt capabilities to answer other frequently asked questions
- [ ] Hook up a Slack chatbot for more user-friendly interaction
- [ ] Slick web interface similar to BirdSQL?
- [ ] Implement using langchain?
