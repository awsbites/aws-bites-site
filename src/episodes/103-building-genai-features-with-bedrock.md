---
episode: 103
title: "Building GenAI Features with Bedrock"
youtube_id: "u945tsm4p7M"
spotify_link: "https://podcasters.spotify.com/pod/show/aws-bites/episodes/103--Building-GetAI-Features-with-Bedrock-e2bhqg1"
publish_date: 2023-11-10
---

In this episode, we discuss how we automated generating YouTube descriptions, chapters and tags for our podcast using Amazon's new GenAI tool: Bedrock.

We provide an overview of Bedrock's features and how we built an integration to summarize podcast transcripts and extract relevant metadata using the Anthropic Claude model. We share the prompt engineering required to instruct the AI, and details on our serverless architecture using Step Functions, Lambda, and EventBridge.

We also discussed Bedrock pricing models and how we built a real-time cost-monitoring dashboard. Overall, this automation saves us substantial manual effort while keeping costs low. We hope this episode inspires others to explore building their AI workflows with Bedrock.


> AWS Bites is brought to you by fourTheorem, an Advanced AWS Partner. If you are moving to AWS or need a partner to help you go faster, check us out at [fourtheorem.com](https://fourtheorem.com)!


In this episode, we mentioned the following resources:

- The [GitHub repository with the code for the AWS Bites website](https://github.com/awsbites/aws-bites-site): 
- [Episoder](https://github.com/fourTheorem/episoder): the open source project we created to handle this Bedrock-based automation
- [Podwhisperer](https://github.com/fourTheorem/podwhisperer/): out other open source automation that creates accurate transcripts for our podcast
- [Amazon Bedrock Workshop](https://catalog.us-east-1.prod.workshops.aws/workshops/a4bdb007-5600-4368-81c5-ff5b4154f518/en-US)
- [Using generative AI on AWS for diverse content types](https://catalog.workshops.aws/genai-on-aws/en-US/01-introduction) (workshop)
- [Deploying a Multi-Model and Multi-RAG Powered Chatbot Using AWS CDK on AWS](https://github.com/aws-samples/aws-genai-llm-chatbot/)
