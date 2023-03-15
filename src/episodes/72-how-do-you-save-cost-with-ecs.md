---
episode: 72
title: "How do you save cost with ECS?"
youtube_id: "kx0zvD0jNK0"
anchor_fm_link: "https://podcasters.spotify.com/pod/show/aws-bites/episodes/72--How-do-you-save-cost-with-ECS-e20c3q3"
publish_date: 2023-03-17
---

AWS ECS is a powerful service that allows you to run containerized applications at scale. It's suitable for a variety of use cases, including web applications, microservices, and background processing.

In this episode, we'll provide an introduction to the main concepts of ECS and then dive into cost-optimization strategies. We'll explore the different options for running containers on ECS, including EC2, Fargate, and ECS Anywhere.

We'll discuss various opportunities for saving money, such as using Arm (Graviton) instances, Spot instances, Compute Savings Plans, and RIs or EC2 Saving Plans.

Finally, we'll cover how to set up ECS to use Spot instances, including how to create capacity providers and specify a capacity provider strategy. We'll also discuss whether it's always best to use EC2 instead of Fargate for cost optimization and recommend some tools that can help you find other opportunities to save on container costs.


> AWS Bites is sponsored by [fourTheorem](https://fourtheorem.com/), an AWS Consulting Partner offering training, cloud migration, and modern application architecture.


In this episode, we mentioned the following resources:

- [Saving Plan calculator](https://aws.amazon.com/savingsplans/compute-pricing/)
- [EC2 instance selector](https://github.com/aws/amazon-ec2-instance-selector)
- [Spot prices dashboard](https://instances.vantage.sh/) by Vantage
- [Fargate Right Sizing dashboard](https://github.com/mreferre/container-insights-custom-dashboards/tree/master/fargate-right-sizing)
- [AWS Cost Explorer rightsizing recommender for EC2]( https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html)
