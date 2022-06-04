---
episode: 39
title: How do you build a cross-account event backbone with EventBridge?
youtube_id: 8zxVwApwgKM
spotify_link: https://open.spotify.com/episode/42pWqiyLYyTGfWfPkVwCJz
podcasts_apple_link: https://podcasts.apple.com/us/podcast/39-how-do-you-build-a-cross-account-event-backbone/id1585489017?i=1000565056125
podcasts_google_link: https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82YTMzMTJhMC9wb2RjYXN0L3Jzcw/episode/YjI4MzlmY2EtNWVhNi00YjkzLTkyN2UtNWVjMzExY2Y0Y2Zm?sa=X&ved=0CAUQkfYCahcKEwjAnNX9-JD4AhUAAAAAHQAAAAAQAQ
anchor_fm_link: https://anchor.fm/aws-bites/episodes/39--How-do-you-build-a-cross-account-event-backbone-with-EventBridge-e1jd97n
publish_date: 2022-06-03
---


When it comes to building and deploying microservice applications on AWS, there are 2 emerging best practices: use a separate AWS account per application (and environment) and decouple communication between separate systems using events (instead of point-to-point communication). Can we use these two best practices together? Yes, but we will need to find a way to pass messages between AWS accounts! In this episode we discuss how to do that using EventBridge as a cross-account event backbone! We discuss why these 2 suggestions are well established best practices, what are the pros and cons that they bring to the table, what an event backbone is and why EventBridge is a great service to implement one. Finally, we will discuss a case study and an example implementation of this pattern in the context of an e-commerce application built with a microservices architecture.

In this episode we mentioned the following resources:
  - [Article “How to use EventBridge as a Cross-Account Event Backbone”](https://dev.to/eoinsha/how-to-use-eventbridge-as-a-cross-account-event-backbone-5fik) 
  - [Repository with example code](https://github.com/fourTheorem/cross-account-eventbridge/)
  - [Article “What can you do with EventBridge?” (fourTheorem blog)](https://www.fourtheorem.com/blog/what-can-you-do-with-eventbridge) 
  - [For great ideas on structuring event payloads, take a read of Sheen Brisals' post on the Lego Engineering blog](https://medium.com/lego-engineering/the-power-of-amazon-eventbridge-is-in-its-detail-92c07ddcaa40)
  - [Article “What do you need to know about SNS?” (fourTheorem blog) which includes a comparison of SNS and EventBridge](https://www.fourtheorem.com/blog/what-do-you-need-to-know-about-sns)
  - [AWS Bites Episode 23: “What’s the big deal with EventBridge?”](https://www.youtube.com/watch?v=UjIE5qp-v8w)
  - [AWS Community Day talk by Luc van Donkersgoed “Event-Driven Architecture at PostNL Scale”](https://www.youtube.com/watch?v=nyoMF1AEI7g)
 