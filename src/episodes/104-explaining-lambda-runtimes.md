---
episode: 104
title: "Explaining Lambda Runtimes"
youtube_id: "hvEJR9nx9XA"
spotify_link: "https://podcasters.spotify.com/pod/show/aws-bites/episodes/104--Explaining-Lambda-Runtimes-e2btsbp"
publish_date: 2023-11-17
---

In this episode, we celebrate AWS Lambda's 9th birthday by taking a deep dive into Lambda runtimes. We discuss how Lambda works, compare official runtimes vs. custom runtimes, and explain when and why building a custom runtime might be worth the effort. We talk through how custom runtimes work, options for deploying them, and potential use cases where they could be beneficial over standard runtimes.


> AWS Bites is brought to you by fourTheorem, an Advanced AWS Partner. If you are moving to AWS or need a partner to help you go faster, check us out at [fourtheorem.com](https://fourtheorem.com)!


In this episode, we mentioned the following resources:

- The original announcement of the [AWS Lambda launch in 2014](https://aws.amazon.com/about-aws/whats-new/2014/11/13/introducing-aws-lambda/)
- [List of official Lambda runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html)
- Library implementing the [Rust runtime](https://github.com/awslabs/aws-lambda-rust-runtime)
- Library implementing the [Go runtime](https://github.com/aws/aws-lambda-go/)
- Library implementing the [C++ runtime](https://github.com/awslabs/aws-lambda-cpp)
- [Third-party PHP runtime](https://bref.sh/) (Bref)
- [Third-party Swift runtime](https://github.com/swift-server/swift-aws-lambda-runtime)
- Official documentation on [how to build a custom runtime](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-custom.html)
- An official [tutorial on how to build a custom runtime](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-walkthrough.html)
- List of [all the environment variables available to a runtime]( https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-runtime)
- [Lambda Response Streaming](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-custom.html#runtimes-custom-response-streaming) official docs
- Our [previous episode on Lambda Response Streaming](https://awsbites.com/77-how-do-you-use-lambda-response-streaming/)
- [On-demand Container Loading in AWS Lambda](https://arxiv.org/abs/2305.13162) (paper)
- [Deep dive on container support for AWS Lambda](https://dev.to/eoinsha/container-image-support-in-aws-lambda-deep-dive-2keh) (Eoin's article)
- [When is the Lambda Init Phase Free, and when is it Billed?](https://lucvandonkersgoed.com/2022/04/09/when-is-the-lambda-init-phase-free-and-when-is-it-billed/) (article by Luc van Donkersgoed)
