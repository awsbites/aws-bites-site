---
episode: 65
title: "Solving SQS and Lambda concurrency problems"
youtube_id: "kNtOhcpju6g"
anchor_fm_link: "https://anchor.fm/aws-bites/episodes/65--Solving-SQS-and-Lambda-concurrency-problems-e1u0mbq"
publish_date: 2023-01-27
---

In this episode of the AWS Bites Podcast, we dive into the serverless pattern of using AWS Lambda together with SQS. We explain the basics of both Lambda and SQS for those who may not be familiar with them. We talk about how we use Lambda, a Function as a Service offering in AWS, to write our own functions and have AWS run them in response to certain events. And we also discuss SQS, a scalable and managed queuing system available on AWS, which we use to offload work to background workers.

We delve into how the two services work together through the use of "Event Source Mapping" in Lambda, which polls our SQS queue and makes synchronous Lambda invocation requests when messages are available. We also mention how this feature provides us with the ability to control batch size and window, as well as specify filters to save execution time and cost. But we also share one of the limitations we faced when using SQS and Lambda together which was the lack of control over concurrency and the potential for excessive throttling.

But recently, AWS has released a new feature called "SQS maximum concurrency support" which allows us to specify a maximum number of invocations for an Event Source Mapping. This solves the problem of excessive throttling and eliminates the need to use reserved concurrency. It also allows for more control over concurrency when using multiple Event Source Mappings with the same function. We explain how this new feature has improved our workflow and made it much more efficient.

> AWS Bites is sponsored by [fourTheorem](https://fourtheorem.com/), an AWS Consulting Partner offering training, cloud migration, and modern application architecture.

In this episode, we mentioned the following resources:

- [AWS Lambda](https://aws.amazon.com/lambda/)
- [Amazon SQS](https://aws.amazon.com/sqs/)
- [Series of blog posts](https://zaccharles.medium.com/does-maximum-concurrency-solve-the-lambda-sqs-issue-3c19701e6e75) by Zac Charles covering the original problem and the solution in detail
- [Official AWS blog post](https://aws.amazon.com/blogs/compute/introducing-maximum-concurrency-of-aws-lambda-functions-when-using-amazon-sqs-as-an-event-source/) with the announcement of the maximum concurrency feature
- [Our previous episode on SQS](https://awsbites.com/22-what-do-you-need-to-know-about-sqs/)
- [Our video-series on AWS event services](https://www.youtube.com/playlist?list=PLAWXFhe0N1vLHkGO1ZIWW_SZpturHBiE_)
