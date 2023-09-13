---
episode: 95
title: "Mounting S3 as a Filesystem"
youtube_id: "ArM0XaAwkrY"
spotify_link: "https://podcasters.spotify.com/pod/show/aws-bites/episodes/95--Mounting-S3-as-a-Filesystem-e297kre"
publish_date: 2023-09-16
---

Saddle up for a cloud adventure like no other in this episode of AWS Bites, where Eoin and Luciano explore the untamed world of AWS S3 Mountpoint.

Just like a trusty steed on the digital prairie, Mountpoint gallops into action to solve complex use cases, making it a valuable asset for managing massive data, achieving high throughput, and effortlessly fetching information from the AWS S3 wilderness. Dive deep into the inner workings of Mountpoint, a Rust-powered Linux-exclusive application that harnesses the Linux FUSE subsystem to provide optimal S3 performance.

While exploring alternatives like s3fs-fuse and goofys, discover the benefits of sticking to native AWS tools for certain scenarios.

Uncover Mountpoint's performance prowess, thanks to its integration with AWS Common Runtime libraries, and learn when to hop on this cloud cowboy or opt for a more native approach.

Wrapping up, don't forget to check out AWS Storage's blog post for an even deeper dive into Mountpoint's capabilities. Whether you're a seasoned cloud wrangler or a newcomer to the digital rodeo, this video will equip you with the knowledge to navigate the AWS S3 Mountpoint frontier confidently. 


> fourTheorem is the company that makes AWS Bites possible. If you are looking for a partner to accompany you on your cloud journey, check them out at [fourtheorem.com](https://fourtheorem.com)!


In this episode, we mentioned the following resources:

- [AWS Mountpoint repository](https://github.com/awslabs/mountpoint-s3/)
- [Running Mountpoint in a container](https://github.com/awslabs/mountpoint-s3/tree/main/docker#docker-permissions-and-aws-container-services)
- [S3-fs-fuse](https://github.com/s3fs-fuse/s3fs-fuse)
- [Goofys](https://github.com/kahing/goofys)
- [AWS CRT](https://docs.aws.amazon.com/sdkref/latest/guide/common-runtime.html)
- [Cloudonaut podcast episode talking about how difficult it is to get 5 TB objects quickly](https://www.youtube.com/watch?v=I91GSGXcOh8)
- [Cloudonaut custom high-performance Node.js S3 Client](https://github.com/widdix/s3-getobject-accelerator)
- [Automated Reasoning at AWS](https://aws.amazon.com/blogs/storage/how-automated-reasoning-helps-us-innovate-at-s3-scale/)
- [Detailed blog post from AWS Storage](https://aws.amazon.com/blogs/storage/the-inside-story-on-mountpoint-for-amazon-s3-a-high-performance-open-source-file-client/)
