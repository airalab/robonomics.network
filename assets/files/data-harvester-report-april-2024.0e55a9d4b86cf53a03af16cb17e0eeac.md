---
title: "Data Harvester Project: April Report"
date: 2024-04-11
published: true
locale: 'en'
cover_image: ./images/data-harvester-report-april-2024/cover.png
description: "The Robonomics team is developing the idea of an autonomous platform for data harvesting. Since Ivan, our science administrator, last shared insights about the project, a month and a half has gone by. In this time, Data Harvester has received significant updates, and we're excited to highlight them in this blog post."
abstract: "The Robonomics team is developing the idea of an autonomous platform for data harvesting. Since Ivan, our science administrator, last shared insights about the project, a month and a half has gone by. In this time, Data Harvester has received significant updates, and we're excited to highlight them in this blog post."
tags: ['Announcements', 'Use Cases', 'Collaborations', 'Smart Home']
---

The Robonomics team is developing the idea of an autonomous platform for data harvesting. Since Ivan, our science administrator, last [shared](https://twitter.com/berman_ivan/status/1759943496742404346) insights about the project, a month and a half has gone by. In this time, Data Harvester has received significant updates, and we're excited to highlight them in this blog post.

## What is Data Harvester?

First, let's recap what this project is about. In its simplest form, this is a mobile robotic platform equipped with sensors, intended to gather available data about its surroundings. In our scenario, we use the [Turtlebot 4 Pro](https://clearpathrobotics.com/turtlebot-4/), manufactured by Clearpath Robotics, equipped with a 3D camera, 2D lidar, and a set of standard sensors for wheeled robots. The central computing unit is the Raspberry Pi. All components of the robot communicating via the ROS 2 framework.

The objective is to convert the robot into a data harvesting machine, collecting secure information about the indoor environment and presenting it in a user-friendly format. To achieve this, additional sensors are integrated with the basic recording devices, and software is developed to facilitate comprehensive data collection from these sensors.

## Turtlebot 4 Pro Hardware Update

Initially, a set of air sensors based on the ESP32 controller was integrated into the robot. These sensors include:

- SHT3X: temperature and humidity sensor
- BH1750: light intensity sensor
- SCD4X: carbon dioxide concentration sensor

Furthermore, the robot's fundamental setup underwent slight enhancements to accommodate increased computational demands and safety considerations:

- The Raspberry Pi 4GB was upgraded to the more potent 8GB version.
- A 3D-printed case was crafted to house the air sensors, ensuring their compact arrangement.
- A protective frame for the camera and lidar was also 3D-printed.
- Additionally, the robot is now encased in warning tape for enhanced visibility.

<rb-image zoom src="./images/data-harvester-report-april-2024/upgraded-turtle-bot-4-pro.jpg" alt="Upgraded Turtle Bot 4 pro" />

## Software Development Progress

The Turtlebot comes with a set of default packages for basic operations, including simultaneous localization and mapping (SLAM) and navigation. However, the task remains to integrate these modules for unified functionality and incorporate specific features for data harvesting. In the current setup, the robot is expected to gather data from air sensors and scan Wi-Fi networks.

Currently, three main ROS 2 packages have been developed for the robot:

- **data_harvester_navigation** - handles localization and navigation of the robot on a pre-existing map constructed with SLAM.
- **data_harvester_perception** - responsible for publishing data from air sensors and conducting Wi-Fi network scans.
- **data_harvester_chronicler** - manages data logging and subsequent publication to the final archive.

For the ESP32 controller, the firmware ```esp32-sensors``` was written based on the ESP-IDF framework with support for all used sensors. The firmware is available in two versions: an online version (with the controller connected to Wi-Fi) and an offline version.

The source code is available on GitHub: https://github.com/Fingerling42/data-harvester

## Field Engineering and Testing

Since the beginning of March, experimental trips have been made with the robot. The object of the field testing is an office space in Paphos, Cyprus. After the initial setup, the robot was left in the office, and its control began to be carried out remotely, using a connection through the end-to-end Yggdrasil protocol.

Firstly, several SLAM laps were made around the office territory. As a result, a sufficiently high-quality map of the studied area was formed.

<rb-image zoom src="./images/data-harvester-report-april-2024/turtle-bot-map-testing.png" alt="Turtle Bot map testing" caption="A map of an office space with an overlay of robot coordinates after one of the missions" />

Then, based on the map, the robot embarked on a mission to collect data. After its completion, data about air quality and Wi-Fi signal quality were collected along with data about the robot's location on the map. This allowed the harvested data to be combined with the points where they were collected. In the end, the final archive was sent for processing and visualization.

<rb-image zoom src="./images/data-harvester-report-april-2024/turtle-bot-4-app-1.png" alt="Turtle Bot application air sensor data" caption="UI for the data collected from the air sensors installed on Turtlebot 4 Pro" />

<rb-image zoom src="./images/data-harvester-report-april-2024/turtle-bot-4-app-2.png" alt="Turtle Bot application wi-fi coverage" caption="UI for Wi-Fi coverage analytics based on data collected from the upgraded Turtlebot 4 Pro" />

## Next Milestones

Our next focus will be on developing comprehensive coverage path planning for the robot's complete traversal of the area, utilizing the Backtracking Spiral Algorithm that has already been selected. Additionally, integration with the latest version of the Robonomics ROS 2 Wrapper will be implemented to securely transmit data to the Robonomics cloud from ROS 2.

On the hardware front, we plan to incorporate a dedicated router into the robot to ensure simplicity and independence in network connections for all components.

Ultimately, our aim is to create a dedicated Data Harvester UI application, allowing collected data to be presented in a user-friendly format. This could prove invaluable, especially for office administrators.

Stay tuned for further updates!