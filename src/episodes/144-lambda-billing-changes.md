---
episode: 144
title: "Lambda Billing Changes, Cold Start Costs, and Log Savings: What You Need to Know"
youtube_id: "BkxCltzTUZo"
spotify_link: "https://creators.spotify.com/pod/show/aws-bites/episodes/144--Lambda-Billing-Changes--Cold-Start-Costs--and-Log-Savings-What-You-Need-to-Know-e336tea"
publish_date: 2025-05-23
---

Cost is always top of mind when building in the cloud, and recently AWS has
introduced some changes worth paying attention to. In this episode of AWS Bites,
we explore a shift that caught many by surprise: the “free” INIT phase for
Lambda’s managed runtimes is going away. That cold start time that used to fly
under the billing radar? It's now part of the cost. We dig into what this means
for your workloads, who might feel the impact, and whether this gives languages
like Rust and Go an extra edge. But it’s not all bad news. AWS has also rolled
out new pricing tiers for CloudWatch Logs, making it cheaper for high-volume
accounts. On top of that, there are new options to send logs directly to S3 or
Firehose, helping simplify pipelines and reduce costs. We close with a few tips
to help you keep your Lambda and logging spend under control. If you're building
on AWS and care about efficiency, this is one you won't want to miss.

> Big shoutout to fourTheorem for powering yet another episode of AWS Bites. At
> fourTheorem, we believe the cloud should be simple, scalable, and
> cost-effective, and we help teams do just that. Whether you’re diving into
> containers, stepping into event-driven architecture, or scaling a global SaaS
> platform on AWS, or trying to keep cloud spend under control our team has your
> back. Visit [fourTheorem.com](https://fourTheorem.com) to see how we can help
> you build faster, better, and with more confidence using AWS cloud!

In this episode, we mentioned the following resources:

- [AWS Blog – Tiered Pricing for AWS Lambda](https://aws.amazon.com/blogs/compute/introducing-tiered-pricing-for-aws-lambda/)
- [Luc van Donkersgoed – When is the Lambda INIT phase free and when is it billed?](https://lucvandonkersgoed.com/2022/04/09/when-is-the-lambda-init-phase-free-and-when-is-it-billed/)
- [AWS Bites – Explaining Lambda Runtimes (Episode 104)](https://awsbites.com/104-explaining-lambda-runtimes/)
- [AWS Blog – Standardized Billing for Lambda INIT Phase](https://aws.amazon.com/blogs/compute/aws-lambda-standardizes-billing-for-init-phase/)
- [Lambda Cold Start Benchmarks by Maxim David](https://maxday.github.io/lambda-perf/)
- [Duckbill Group Blog – Lambda Logs Just Got Cheaper](https://www.duckbillgroup.com/blog/lambda-logs-just-got-cheaper/)
- [AWS Bites – Becoming a Logs Ninja with CloudWatch (Episode 35)](https://awsbites.com/35-how-can-you-become-a-logs-ninja-with-cloudwatch)
