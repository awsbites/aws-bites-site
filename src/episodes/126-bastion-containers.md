---
episode: 126
title: "Bastion Containers"
youtube_id: "AP3IKCrZy2U"
spotify_link: "https://podcasters.spotify.com/pod/show/aws-bites/episodes/126--Bastion-Containers-e2la3da"
publish_date: 2024-06-28
---

This episode discusses solutions for securely accessing private VPC resources for debugging and troubleshooting. We cover traditional approaches like bastion hosts and VPNs and newer solutions using containers and AWS services like Fargate, ECS, and SSM. We explain how to set up a Fargate task with a container image with the necessary tools, enable ECS integration with SSM, and use SSM to start remote shells and port forwarding tunnels into the container. This provides on-demand access without exposing resources on the public internet. We share a Python script to simplify the process. We suggest ideas for improvements like auto-scaling the container down when idle. Overall, this lightweight containerized approach can provide easy access for debugging compared to managing EC2 instances.


> AWS Bites is brought to you by fourTheorem an AWS consulting partner with tons of experience with AWS. If you need someone to help you with your ambitious AWS projects, check out [fourtheorem.com](https://fourtheorem.com)!


In this episode, we mentioned the following resources:

- Our previous episode [78. When do you need a bastion host?](https://awsbites.com/78-when-do-you-need-a-bastion-host)
- [Basti](https://github.com/basti-app/basti): Securely connect to RDS, Elasticache, and other AWS resources in VPCs with no idle cost
- Our [GitHub gist with a Python script](https://gist.github.com/eoinsha/157f6d869d0033f80a8da5757e8781f7) you can adjust to your needs
