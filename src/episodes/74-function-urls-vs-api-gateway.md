---
episode: 74
title: "Function URLs vs API Gateway"
youtube_id: "R1LG7pY5k8c"
spotify_link: "https://podcasters.spotify.com/pod/show/aws-bites/episodes/74--Function-URLs-vs-API-Gateway-e2142kb"
publish_date: 2023-03-31
---

How can you use a Lambda to respond to an HTTP request? There are more ways than ever to do it. We have API Gateway REST APIs, Lambda support for Application Load Balancer, and now Function URLs. But which one should you use, and when?

In this episode of AWS Bites podcast, we will give you a quick and simple guide to picking the best way to build APIs with Lambda. In this video, we're going to pitch Function URLs against API Gateway in a battle for the ages!

Function URLs offer a simple and quick way to get a public URL to invoke a Lambda function, with fewer configuration options and cheaper pricing. They are suitable for private webhooks, simple backend functions, and machine learning inference backend. However, they lack authorization and DDoS protection, making them unsuitable for like public webhooks. On the other hand, API Gateway offers more features and control, making it suitable for public APIs. API Gateway comes in two flavors: REST and HTTP with some subtle differences.

Finally, we will also cover Application Load balancer and explore when and why it can be a convenient alternative to both Function URLs and API Gateway.

> AWS Bites is sponsored by [fourTheorem](https://fourtheorem.com/), an AWS Consulting Partner offering training, cloud migration, and modern application architecture.


In this episode, we mentioned the following resources:

- [Article by AJ Stuyvenberg](https://dev.to/aws-builders/) reporting that Function URLs have a latency of 8.35ms: introducing-lambda-function-urls-4ahd
- [GitHub repository](https://github.com/eoinsha/function-urls-vs-api-gateway) with all the material we used in our evaluation
