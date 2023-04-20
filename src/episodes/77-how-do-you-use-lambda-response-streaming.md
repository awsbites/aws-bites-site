---
episode: 77
title: "How do you use Lambda Response Streaming?"
youtube_id: "0mVL2pgzJ4o"
spotify_link: "https://podcasters.spotify.com/pod/show/aws-bites/episodes/77--How-do-you-use-Lambda-Response-Streaming-e22k8ko"
publish_date: 2023-04-21
---

Are you tired of waiting for your Lambda functions to finish before getting a response? Well, now you don't have to! In this episode of the AWS Bites podcast, we will talk about Lambda Response Streaming, a new feature recently added by AWS that lets you stream responses from your Lambda functions in real time.

We'll start by explaining what Lambda Response Streaming is and how it differs from buffering. We'll also discuss HTTP Chunking and other benefits of streaming. If you're a Node.js developer, you'll be happy to know that we'll cover how to work with streams in Node.js and how the new Lambda Response Streaming API works with the Node.js runtime.

But that's not all! We'll also discuss how to consume Lambda Response Streaming responses and compare that with S3 Object Response. And if you're wondering about pricing and quotas, we'll cover that too.

Finally, we'll answer the question on everyone's mind: will we get streaming requests as well? You'll have to watch the video to find out!

So if you're interested in learning more about Lambda Response Streaming and how it can improve the performance of your serverless applications, make sure to tune in. We promise it'll be worth your time.

> AWS Bites is sponsored by [fourTheorem](https://fourtheorem.com/), an AWS Consulting Partner offering training, cloud migration, and modern application architecture.


In this episode, we mentioned the following resources:

- Official announcement [blog post for Lambda Response Streaming](https://aws.amazon.com/blogs/compute/introducing-aws-lambda-response-streaming/)
- Our previous [episode about Lambda function URLs vs API GW vs LB](https://awsbites.com/74-function-urls-vs-api-gateway/ )
- [HTTP Chunked transfer encoding protocol](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
- Luciano's [free Node.js streams workshop](https://github.com/lmammino/streams-workshop) on GitHub
- [Node.js design patterns (the book)](https://nodejsdesignpatterns.com )
- [Streamify response functionality in Middy](https://middy.js.org/docs/intro/streamify-response/)
- Lambda Rust Runtime codebase ([support for Response Streaming](https://github.com/awslabs/aws-lambda-rust-runtime/blob/3fce312eb77f7ec1722e1c4605b11f770e286ed9/lambda-runtime/src/streaming.rs#L214))
- Similar [evidence of Response Streaming feature support in the GoLang Runtime](https://github.com/aws/aws-lambda-go/blob/81d63bd21219911099b1dd9a2b1e4d46d4a87288/events/lambda_function_urls.go#L134)
- Our previous [episode about S3 pre-signed URLs](https://awsbites.com/56-what-can-you-do-with-s3-presigned-urls/)
- [Lambda Response Streaming pricing](https://aws.amazon.com/lambda/pricing/#:~:text=Lambda%20HTTP%20Response%20Stream%20Pricing,-AWS%20Lambda%20functions)
- Eoin's [article about S3 Object Response](https://eoins.medium.com/using-s3-object-lambdas-to-generate-and-transform-on-the-fly-874b0f27fb84)
- [Experimental Node.js custom Node.js streaming runtime](https://github.com/lmammino/lambda-node-streaming-runtime/)
