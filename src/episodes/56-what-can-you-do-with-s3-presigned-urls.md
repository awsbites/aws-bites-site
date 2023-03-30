---
episode: 56
title: "What can you do with S3 presigned URLs?"
youtube_id: "NDEWH0VTudg"
spotify_link: "https://podcasters.spotify.com/pod/show/aws-bites/episodes/56--What-can-you-do-with-S3-presigned-URLs-e1pqbac"
publish_date: 2022-10-28
---

Uploading and downloading files are some of the most common operations for web applications. But let’s face it, as common as they are, they are still challenging features to implement in a reliable and scalable way!

This is especially true for serverless environments where you have strict limits in payload size and you cannot have long-running connections.

So what’s the solution? If you are using S3, pre-signed URLs can help quite a bit! 

In this episode of AWS Bites podcast, we are going to learn more about them, and… if you stick until the very end of this episode, we are going to disclose an interesting and quite unknown tip about pre-signed URLs!


Some of the resources we mentioned:

- Our [illustrated article on S3 pre-signed URLs](https://fourtheorem.com/the-illustrated-guide-to-s3-pre-signed-urls/)
- Documentation for the [pre-signed POST method](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOST.html)
- [How to upload files from a frontend app using pre-signed URLs](https://bobbyhadz.com/blog/aws-s3-presigned-url-react), article by Borislav Hadzhiev
- [Using pre-signed URLs for multi-part uploads](https://www.altostra.com/blog/multipart-uploads-with-s3-presigned-url), article by Altostra 
- [Different architectures and tips for managing uploads to S3](https://zaccharles.medium.com/s3-uploads-proxies-vs-presigned-urls-vs-presigned-posts-9661e2b37932), article by Zach Charles
- [Using S3 Object Lambdas to generate and transform S3 files on the fly](https://eoins.medium.com/using-s3-object-lambdas-to-generate-and-transform-on-the-fly-874b0f27fb84), article by Eoin Shanaghy 
