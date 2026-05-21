---
episode: 154
title: "LLM Inference with Bedrock"
youtube_id: "lqw92QYqM88"
spotify_link: "https://creators.spotify.com/pod/profile/aws-bites/episodes/154--S3-Files-e3jjauo"
publish_date: 2026-05-22
---

We take a deep dive into Amazon S3 Files, AWS's exciting new managed file system backed by S3! We kick things off by exploring why S3 isn't a traditional file system, covering everything from the lack of true directories and atomic renames to immutable objects and POSIX access control differences. We then walk through the existing solutions people have used to bridge that gap, like S3FS FUSE, MountPoint for S3, FSx for Lustre, and Storage Gateway. From there, we get into the heart of the episode: how S3 Files works, how to set it up, and how it uses EFS under the hood as a caching layer. We share our own real-world benchmarking results comparing S3 Files against various EFS configurations across Lambda and Fargate, and we discuss a real customer project where we put S3 Files to the test. We also cover the important caveats like eventual consistency, the 60-second write-back delay, the lack of cross-account bucket support, and the cost model so you can make an informed decision. 


> Thanks to fourTheorem for powering AWS Bites. We help teams build cloud systems that are simple, scalable, and cost effective. Visit [fourTheorem.com](https://fourTheorem.com).

In this episode, we mentioned the following resources.

 - [Episode 124: S3 Performance](https://awsbites.com/124)
 - [Episode 95: Mounting S3 as a Filesystem](https://awsbites.com/95)
 - [Amazon S3 FAQs (S3 Files)](https://aws.amazon.com/s3/faqs/)
 - [fourTheorem S3 Files demo code on GitHub](https://github.com/fourTheorem/s3-files-demo)
 - [Amazon documentation - Understanding how synchronization works](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-files-synchronization.html)
