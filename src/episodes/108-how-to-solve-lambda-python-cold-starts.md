---
episode: 108
title: "How to Solve Lambda Python Cold Starts"
youtube_id: "XnC0XbXawuk"
spotify_link: "https://podcasters.spotify.com/pod/show/aws-bites/episodes/108--How-to-Solve-Lambda-Python-Cold-Starts-e2d4a7e"
publish_date: 2023-12-15
---

In this episode, we discuss how you can use Python for data science workloads on AWS Lambda. We cover the pros and cons of using Lambda for these workloads compared to other AWS services. We benchmark cold start times and performance for different Lambda deployment options like zip packages, layers, and container images. The results show container images can provide faster cold starts than zip packages once the caches are warmed up. We summarize the optimizations AWS has made to enable performant container image deployments. Overall, Lambda can be a good fit for certain data science workloads, especially those that are bursty and need high concurrency.

> AWS Bites is brought to you by fourTheorem, the ultimate AWS partner for modern applications on AWS. We can help you to be successful with AWS! Check us out at [fourtheorem.com](https://fourtheorem.com)!


In this episode, we mentioned the following resources.

- Our blog post detailing our research on [how to optimise Python Data Science in AWS Lambda](https://fourtheorem.com/optimise-python-data-science-aws-lambda/)
- The [repository with our benchmarks and related visualizations](https://github.com/fourTheorem/lambda-datasci-perf)
- [On-demand Container Loading on AWS Lambda](https://arxiv.org/abs/2305.13162) (AWS Paper)
