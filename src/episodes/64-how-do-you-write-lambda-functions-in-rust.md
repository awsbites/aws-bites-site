---
episode: 64
title: "How do you write Lambda Functions in Rust?"
youtube_id: "HZLEIWcFJy8"
anchor_fm_link: "https://podcasters.spotify.com/pod/show/aws-bites/episodes/64--How-do-you-write-Lambda-Functions-in-Rust-e1tkluh"
publish_date: 2023-01-20
---

Are you curious about using Rust to write AWS Lambda functions?

In this episode of AWS BItes, we will be discussing the pros and cons of using Rust for serverless applications. With Rust, you'll be able to take advantage of its fast performance and memory efficiency. Plus, its programming model makes it easy to write safe and correct code. However, Rust is not a native runtime for Lambda, but rather a library that implements a custom runtime built and maintained by AWS. This custom runtime is built on top of the Tokio async runtime and even has a built-in middleware engine, which allows for easy hook-in of reusable logic and building your own middlewares.

But what if you're new to Rust? Don't worry, we'll also be walking you through the steps on how to write your first Lambda in Rust. From cargo-lambda to the serverless framework plugin for Rust, we'll be sharing different alternatives for building and deploying your Rust-based Lambda functions. 

So join us on this journey as we explore the exciting world of Rust and Lambda.

> AWS Bites is sponsored by [fourTheorem](https://fourtheorem.com/), an AWS Consulting Partner offering training, cloud migration, and modern application architecture.

In this episode, we mentioned the following resources:

- [Rust 1.0 original announcement](https://blog.rust-lang.org/2015/05/15/Rust-1.0.html)
- [The Rust programming language](https://www.rust-lang.org/) home page
- [Firecracker runtime](https://firecracker-microvm.github.io)
- [Luciano's Twitch profile](https://twitch.tv/loige)
- [AWS Rust runtime library](https://github.com/awslabs/aws-lambda-rust-runtime)
- [Tokio, Rust async runtime](https://tokio.rs/)
- Example of [how to enable the tracing middleware in Lambda](https://github.com/awslabs/aws-lambda-rust-runtime/blob/99dba6447253ac87cf3cefeb2ba130b50514f9df/examples/http-tower-trace/src/main.rs)
- [Rustup tool to install the Rust toolchain](https://rustup.rs/)
- Reference [article on how to write a Lambda in Rust using cargo-rust](https://blog.scanner.dev/getting-started-with-serverless-rust-in-aws-lambda/)
- [Cargo-lambda, a Cargo extension that helps with writing, running, testing, and deploying lambdas written in Rust](https://www.cargo-lambda.info/)
- [Serverless framework plugin for Rust](https://www.serverless.com/plugins/serverless-rust)
- Eoin's article on [Container Image Support in AWS Lambda](https://dev.to/eoinsha/container-image-support-in-aws-lambda-deep-dive-2keh)
- [AWS SDK for Rust](https://github.com/awslabs/aws-sdk-rust)
- [Coding challenges to learn rust](https://exercism.org/)
