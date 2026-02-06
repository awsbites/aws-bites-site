---
episode: 152
title: "Exploring Lambda Durable Functions"
youtube_id: "jFUfcvYvnEQ"
spotify_link: "https://creators.spotify.com/pod/profile/aws-bites/episodes/152--Exploring-Lambda-Durable-Functions-e3emln8"
publish_date: 2026-02-06
---

AWS Lambda is fantastic for small, stateless code on demand. But as soon as your "function" becomes a workflow (retries, backoff, long waits, human approvals, callbacks), classic Lambda can feel like a fight: 15-minute max runtime, no built-in state, and orchestration glue everywhere (Step Functions, queues, schedules, and state you did not want to own).

In this episode of AWS Bites, Eoin and Luciano explore AWS Lambda Durable Functions (announced at re:Invent 2025). It's still Lambda - same runtimes and scaling - but with durable execution superpowers: named steps, automatic checkpointing, and the ability to suspend and resume from a safe point without redoing completed work.

We unpack the key mental model (the replay/resume mechanism), where it shines, and the gotchas: determinism, idempotency, replay-aware logging, and debugging resumed runs. To make it real, we share how we rebuilt PodWhisperer v2 using Durable Functions to orchestrate a GPU-powered WhisperX pipeline, LLM refinement, speaker naming, and caption generation.

> Thanks to fourTheorem for powering AWS Bites. We help teams build cloud systems that are simple, scalable, and cost effective - event-driven platforms, global SaaS scaling, serverless/container modernisation, and cloud cost control. Visit [fourTheorem.com](https://fourTheorem.com).

In this episode, we mentioned the following resources:

- [AWS blog: Build multi-step applications and AI workflows with AWS Lambda Durable Functions](https://aws.amazon.com/blogs/aws/build-multi-step-applications-and-ai-workflows-with-aws-lambda-durable-functions/)
- [Best practices for Lambda Durable Functions](https://docs.aws.amazon.com/lambda/latest/dg/durable-best-practices.html)
- [The replay model: How AWS Lambda Durable Functions actually work](https://dev.to/aws/the-replay-model-how-aws-lambda-durable-functions-actually-work-2a79)
- [AWS Lambda Durable Functions: Build workflows that last](https://dev.to/aws/aws-lambda-durable-functions-build-workflows-that-last-3ac7)
- [Developing AWS Lambda Durable Functions with AWS SAM](https://dev.to/aws/developing-aws-lambda-durable-functions-with-aws-sam-ga9)
- [Testing AWS Lambda Durable Functions in TypeScript](https://dev.to/aws/testing-aws-lambda-durable-functions-in-typescript-5bj2)
- [Hands-on notes on Lambda Durable Functions](https://www.andmore.dev/blog/lambda_durable_functions/)
- [Lambda Durable Functions introduction (video)](https://www.youtube.com/watch?v=XJ80NBOwsow)
- [Lambda Durable Functions deep dive (video)](https://www.youtube.com/watch?v=giNnpHauWT0)
- [PodWhisperer on GitHub](https://github.com/fourTheorem/podwhisperer/)
- [Episoder on GitHub](https://github.com/fourTheorem/episoder)
- [Episode 63 - How to automate transcripts with Amazon Transcribe and OpenAI Whisper](https://awsbites.com/63-how-to-automate-transcripts-with-amazon-transcribe-and-openai-whisper)
- [Episode 150 - Exploring all new ECS Managed Instances (MI) mode](https://awsbites.com/150-exploring-all-new-ecs-managed-instances-mi-mode)
- [WhisperX on GitHub](https://github.com/m-bain/whisperX)
