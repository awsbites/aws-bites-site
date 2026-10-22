---
episode: 155
title: "How We Made AWS Containers Start Up to 10× Faster!"
youtube_id: "4f3NCgALBmU"
spotify_link: "https://creators.spotify.com/pod/profile/aws-bites/episodes/155--How-We-Made-AWS-Containers-Start-Up-to-10--Faster-e3qsd1h"
publish_date: 2026-10-23
---

What if you could make your AWS containers start up to 10× faster without changing your application code? In this episode of AWS Bites, Eoin and Luciano explore practical ways to reduce container startup time, from smaller Docker images and faster compression to lazy loading with SOCI (Seekable OCI).

We start with the fundamentals: multi-stage Docker builds, image layers, caching, and the trade-offs between gzip and zstd compression. Then we explain how SOCI lets containers start without downloading and unpacking every layer upfront, covering containerd snapshotters, FUSE, zTOCs, compressed spans, and HTTP Range requests.

To put these techniques to the test, we share our open-source benchmark covering 44 configurations and 1,320 ECS task executions. We compare image sizes, compression methods, ARM64 and x86-64 architectures, and Fargate against ECS on EC2 with Amazon Linux 2023 and Bottlerocket. In some of our large-image Fargate benchmarks, SOCI delivered up to a 10× startup improvement.

We also discuss SOCI support across Fargate, SageMaker, EKS, and ECS on EC2, and walk through the tools and workflow for generating SOCI indexes and publishing images to ECR. We close with the practical trade-offs: when zstd might be enough, when SOCI is worth adopting, and why time to useful work matters more than container startup time alone.

> Thanks to fourTheorem for powering AWS Bites. We help teams build cloud systems that are simple, scalable, and cost effective. Visit [fourTheorem.com](https://fourtheorem.com).

In this episode, we mentioned the following resources:

- [Container startup benchmark and interactive results](https://github.com/fourTheorem/container-start-speed)
- [The hidden design compromises of Docker layers](https://loige.co/hidden-design-compromises-of-docker-layers/)
- [Building x86 Rust containers from Apple Silicon](https://loige.co/building_x86_rust-containers-from-mac-silicon/)
- [AWS deep dive: Lazy loading container images with SOCI](https://aws.amazon.com/blogs/containers/under-the-hood-lazy-loading-container-images-with-seekable-oci-and-aws-fargate/)
- [SOCI Snapshotter on GitHub](https://github.com/awslabs/soci-snapshotter)
- [AWS SageMaker SOCI documentation](https://docs.aws.amazon.com/sagemaker/latest/dg/soci-indexing.html)
- [ECS roadmap: SOCI snapshotter support](https://github.com/aws/containers-roadmap/issues/1832)
- [ECS roadmap: containerd support](https://github.com/aws/containers-roadmap/issues/626)
