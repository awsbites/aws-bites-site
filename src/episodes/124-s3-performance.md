---
episode: 124
title: "S3 Performance"
youtube_id: "KajcOqehb2k"
spotify_link: "https://podcasters.spotify.com/pod/show/aws-bites/episodes/124--S3-Performance-e2k940d"
publish_date: 2024-05-31
---

In this episode, we discuss some tips and tricks for optimizing performance when working with Amazon S3 at scale. We start by giving an overview of how S3 works, highlighting the distributed nature of the service and how data is stored redundantly across multiple availability zones for durability. We then dive into specific tips like using multipart uploads and downloads, spreading the load across key namespaces, enabling transfer acceleration, and using S3 byte-range fetches. Overall, we aim to provide developers building S3-intensive applications with practical guidance to squeeze the most performance out of the service.


> AWS Bites is brought to you by fourTheorem an AWS consulting partner with tons of experience with S3. If you need someone to work with to optimize your S3-based workloads, check out at [fourtheorem.com](https://fourtheorem.com)!


In this episode, we mentioned the following resources:

- Our [previous episode on S3 best practices](/83-bucket-list-of-s3-best-practices)
- [“Deep dive on Amazon S3” (re:Invent talk from 2021)](https://www.youtube.com/watch?v=FJJxcwSfWYg)
- More recent [re:Invent talk on Amazon S3](https://youtu.be/sYDJYqvNeXU) (with updated data and more best practices) - We discovered this one just after the recording
- [Multi-part upload user guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html)
- [Code examples from the SDK](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpu-upload-object.html) (high-level and low-level APIs)
- [Node.js official helper library](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-lib-storage/) (`@aws-sdk/lib-storage`)
- [Example on how you can implement byte-range fetches](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example_s3_Scenario_UsingLargeFiles_section.html)
- [s3-getobject-accelerator library](https://github.com/widdix/s3-getobject-accelerator)
- [aws-c-s3 library](https://github.com/awslabs/aws-c-s3)
- [S3 storage lens](https://aws.amazon.com/s3/storage-lens/)
- Docs on [S3 Transfer Accelerator](https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration-examples.html)
- [Performance Guidelines for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance-guidelines.html)
- [Performance Design Patterns for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance-design-patterns.html)
