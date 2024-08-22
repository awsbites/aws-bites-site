---
episode: 129
title: "Lambda Provisioned Concurrency"
youtube_id: "WnUT-7jodGI"
spotify_link: "https://podcasters.spotify.com/pod/show/aws-bites/episodes/129--Lambda-Provisioned-Concurrency-e2nfspp"
publish_date: 2024-08-23
---

In this episode, we discuss AWS Lambda provisioned concurrency. We start with a
recap of Lambda cold starts and the different concurrency control options. We
then explain how provisioned concurrency works to initialize execution
environments in advance to avoid cold starts. We cover how to enable it, pricing
details, common issues like over/under-provisioning, and alternatives like
self-warming functions or using other services like ECS and Fargate.

> This episode of AWS Bites is powered by fourTheorem. Whether you're looking to
> architect, develop, or modernize on AWS, fourTheorem has you covered. Ready to
> take your cloud game to the next level? Head to
> ⁠⁠⁠[fourtheorem.com](https://fourtheorem.com)⁠ to check out our in-depth articles,
> and case studies, and see how we can help transform your AWS journey.

In this episode, we mentioned the following resource:

- Episode 60: ["What is AWS Lambda"](/60-what-is-aws-lambda/)
- Episode 104:
  ["Explaining AWS Lambda Runtimes"](/104-explaining-lambda-runtimes/)
- Episode 108:
  ["Solving Lambda Cold Starts in Python"](/108-how-to-solve-lambda-python-cold-starts/)
- Episode 120: ["Lambda Best Practices"](/120-lambda-best-practices/)
- [AWS Lambda Concurrency Explained](https://www.youtube.com/watch?v=KHACnNKTefI)
  by James Eastham
- [Provisioned Concurrency pricing](https://aws.amazon.com/lambda/pricing/#Provisioned_Concurrency_Pricing)
- [Less than 1% of invocations are cold-starts](https://docs.aws.amazon.com/lambda/latest/operatorguide/execution-environments.html)
  (statement)
- [Middy Warmup Middleware](https://middy.js.org/docs/middlewares/warmup/)
- [Lambda speculative warm-up init](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtime-environment.html#:~:text=For%20functions%20using,on%20this%20behavior)
  (mention in the Docs)
- Episode 64:
  ["How do you write Lambda Functions in Rust"](/64-how-do-you-write-lambda-functions-in-rust)
- Episode 128:
  ["Writing a book about Rust and Lambda"](/128-writing-a-book-about-rust-and-lambda)
