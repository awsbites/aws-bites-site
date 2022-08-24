---
episode: 49
title: "Building a File Transfer application on AWS - Live coding PART 2"
youtube_id: "4wCX32YUtMk"
anchor_fm_link: "https://anchor.fm/aws-bites/episodes/49--Building-a-File-Transfer-application-on-AWS---Live-coding-PART-2-e1mttnp"
publish_date: 2022-08-24
---

How can you build a WeTransfer or a Dropbox Transfer clone on AWS?

This is our second live coding stream. In this episode, we revisited our architecture and added a custom domain to our APIs, and created a new API endpoint that allows us to have download URLs that are much nicer (shorter and branded).   

We also added support for the Content-Disposition header to make sure that uploads can specify a file name and that downloads will retain the same file name (regardless of the file key in S3).

All our code is available in this repository: [github.com/awsbites/weshare.click](https://github.com/awsbites/weshare.click).
