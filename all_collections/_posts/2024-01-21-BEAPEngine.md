---
layout: post
title: BEAPEngine
date: 2024-01-28 10:18:00
categories: [typescript, java, react, java-spring, postgresql, redis, docker, r]
---

The Built Environment and Active Populations (BEAP) Engine, is a web application/tool we developed to collect, process and
analyze physical activity data exported from Apple Watch and Fitbit devices(As a value add,) the
tool also predicts past physical activity (from metrics such as energy expenditure and distance
walked) using machine learning methods, and returns the file in a more user-friendly format

I worked with [BEAPLab](https://www.beaplab.com/home/) to help further develop their frontend by using react + typescript, implemented a CI/CD pipeline using
Github Actions and Digital Ocean, dockerizing the application and caching for build speedups, implemented different environments (local, staging, prod) for easier development, implemented testing (unit, integration, and system testing)
for all components, created cron jobs in the server for automatic management of licenses and tasks, and added new api's for accounts along with data uploading + deletion.

#### CI/CD Pipeline
An overview of how the pipeline was setup.
![rank-info](/assets/beaplab/cipipeline.png)


#### Demo
<iframe width="420" height="315" src="https://www.youtube.com/watch?v=D-_JYA4MWh4" frameborder="0" allowfullscreen></iframe>

[Access the site here](https://beapengine.com/)


[Look at the source code here!](https://github.com/ralphgregorio/BEAPEngine)
