---
episode: 151
title: "EC2 loves Lambda - Lambda Managed Instances"
youtube_id: "i-Nr0cqrdDk"
spotify_link: "https://creators.spotify.com/pod/profile/aws-bites/episodes/151--EC2-loves-Lambda---Lambda-Managed-Instances-5VjCM3XGb3xoONWTIukvD7"
publish_date: 2026-01-16
---

AWS just made Lambda… less serverless. Lambda Managed Instances (Lambda MI) brings managed EC2 capacity into Lambda, and it changes the rules: environments stay warm, a single environment can handle multiple concurrent invocations, and scaling becomes proactive and asynchronous instead of "spin up on demand when traffic hits."

In this episode of AWS Bites, Eoin and Luciano break down what Lambda MI unlocks (and what it costs): fewer traditional cold starts, but a new world of capacity planning, headroom, and potential throttling during fast spikes. We compare it to Default Lambda, explain how the new scaling signals work, and what "ACTIVE" really means when publishing can take minutes on a new capacity provider.

To make it real, we built a video-processing playground: an API, a CPU-heavy processor, and a Step Functions workflow that scales up before work and back down after. We share the practical lessons, the rough edges (regions, runtimes, mandatory VPC, minimum 2 GB + 1 vCPU, concurrency pitfalls), and the pricing reality: requests + EC2 cost + a 15% management fee.

> Big shoutout to fourTheorem for powering another episode of AWS Bites. At fourTheorem, we believe the cloud should be simple, scalable, and cost effective, and we help teams do just that. Whether you are building event-driven systems, scaling a global SaaS on AWS, modernising serverless and container platforms, or trying to keep cloud spend under control, our team has your back. Visit fourTheorem.com to see how we can help you build faster, better, and with more confidence on AWS.

In this episode, we mentioned the following resources:

- [Lambda Managed Instances official docs](https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances.html)
- [Our example repo (video processing playground)](https://github.com/fourTheorem/lambda-mi)
- [Concurrency mental model reference (Vercel Fluid Compute)](https://vercel.com/fluid)
- [Lambda MI Node.js runtime best practices (concurrency considerations)](https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances-nodejs-runtime.html)
