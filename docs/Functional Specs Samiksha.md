---
id: SamikshaFuncSpecs
title: Functional Specifications (Samiksha)
sidebar_label: Functional Specifications (Samiksha)
---

## Samiksha Overview

### Objective

State Education Departments across India have been driving reforms in school monitoring processes. Over the years, the different State Education Departments have introduced technology to collect data for assessment, for monitoring visits and also for visualizing data on online dashboards for conducting effective department reviews. The focus of these reforms has been to improve the quality of data collection exercises conducted by different levels of officials within the department and to enable precise decision making at the state level. 

The objective of Samiksha is to transform school monitoring by providing an application with a highly configurable set of features for data collection and visualization. Samiksha is designed for this specific governance use case and is built on OpenSource in a modular, reusable and scalable manner. The application design is created with the assumption that the engineering team of the State National Informatics Centre or from a private technology firm working with the State Education Departments will be able to deploy and maintain this product with the documentation provided.

Through Samiksha the State Education Department can have a mobile application with configurable monitoring and mentoring forms. This application can be used by the department officials while conducting school visits. Management of users of this application, configuration of forms, visualization of the data collected and tracking of the application performance can all be managed within this application by non-technical functional owners within the State Education Department. 


### Governance Use Cases

The Samiksha product can be used for managing the following activities of the State Education Department:
1. Primary School Monitoring by DEO, BEOs
2. Secondary School Monitoring by DEO, BEOs
3. Mentoring Visits by BRCCs
4. State Initiative Tracking Visits (such as SAT visits) by any State Department Officials

### Usage Status Across India

Samiksha is being used by the State Education Departments of the following states:

1. Himachal Pradesh
2. Haryana

Total usage of the Samiksha product as on 12 April 2020 is summarized below:

1. Total active users >35,000
2. Total visit data submissions > 1,10,000 

### Key Benefits

We have observed the following key benefits that the states using Samiksha have experienced.

**1. Improved compliance** - Compliance of school visits has increased significantly with structured processes for data collection, reporting and reviews.

**2. Structured reviews** - Problem solving and decision making in reviews conducted at a state, district and block levels have been increasingly supported by the timely and structured data collected through these monitoring and mentoring visits.

**3. Increased monitoring coverage** - In Haryana mentoring and monitoring exercises were limited to primary schools and after continued use of Samiksha for primary school monitoring, the State Education Department expanded these visits for secondary schools as well.

**4. Improved teacher feedback quality** - With consistent feedback being provided by mentors through the class observation visits teachers have been able to receive timely and regular feedback from mentors.

### Alternative Process

There are existing alternative processes that can be used for conducting these monitoring visits. These have been summarized below:

**1. Pen & Paper based data collection** - Pros cons to be added

**2. OMR based data collection** - Pros cons to be added
  
## Core Samiksha Features

**1. For State Department Monitoring & Mentoring Staff**
- Ability to view forms based on their designation
- Ability to fill and submit school visit forms
- Ability to view past school visit submission data
- Ability to update profile information

**2. For State Department Reviewers**
- Ability to view, in real time, complete details of the school visit submissions
- Ability to view, in real time, summarized views of the school visit submissions
- Ability to download dashboard views as PDFs

**3. For Process Administrators**
- Ability to create and manage school visit forms
- Ability to create and manage user profiles
- Ability to update designation to form mapping (for designation based access to forms)
- Ability to create visualizations of the visit submissions
- Ability to view application performane statistics

## High Level Specifications

### Configurable Data Collection Forms

**1. Simple Configuration Interface**	- Configure highly complex data collection forms in a few minutes though a simple Google Form like interface or by using an excel sheet. The forms have an extensive set of capabilities to enable different types of data points to be collected.

**2. Geo Location Capture**	- Add custom pages within the application to share information with the users about the purpose of the application, tutorial videos, helpline numbers, and instructions 

**3. Offline Enabled**	- Update jurisdiction data consisting of districts, blocks, cluster, GPs, schools and more live from the backend. If a new school, GP or cluster is added it can be made live immediately 

**4. Bilingual Forms**	Define and serve in-app trigger based notifications to users to guide them through the user flow of the monitoring or mentoring activity

### Configurable Mobile Application	

**1. Whitelabel UI** - Whitelabel the mobile application by adding the theme colors, splash screens, login screens, logos, about us information based on your department branding.

**2. Add / Remove Pages**	- Add custom pages within the application to share information with the users about the purpose of the application, tutorial videos, helpline numbers, and instructions.

**3. Jurisdiction Data** - Update	Update jurisdiction data consisting of districts, blocks, cluster, GPs, schools and more live from the backend. If a new school, GP or cluster is added it can be made live immediately.

**4. Notifications** -	Define and serve in-app trigger based notifications to users to guide them through the user flow of the monitoring or mentoring activityDefine and serve in-app trigger based notifications to users to guide them through the user flow of the monitoring or mentoring activity.

### User Authentication & Management	

**1. User Mangement**	- Create and manage users through a pre-designed admin panel and add variables for each user such as role (Teacher, BEO, DEO, Mentors), jurisdiction (District, Block, School)

**2. Role Based Form Access** -	Enable or disable access to data collection forms on the application based on the role of the application users

**3. View Profile Details (in App)** -	Allow users to view or edit specific variables of their profile information through the mobile application itself 

**4. OTP Based Password Reset**	- Users can reset their passwords though an SMS based password reset functionality in the application 

### Visualize Form Information	

**1. Easy to Configure Graphs**	- Create visualizations with a few clicks using Metabase, a configurable visualization tool with detailed documentation

**2. Filtered Views**	- Add filters to graphs to show data grouped by any variable in your dataset. Typically used for grouping by school, cluster, block, district, academic year.

**3. Add Images & Logos**	- Insert government state education department logos and local on-ground images across dashboards to make them look consistent to the state department branding.

**4. Generate PDF Views**	- Configure PDFs for dashboard views to enable users to download and print different views of the dashboard. This is typically used by block officers to put up monthly dashboard based report on notice boards in their offices or by teachers in schools.

### Monitor Application Performance	

**1. Track User Engagement**	- Track user engagement at a per minute, per 30 minutes, per 24 hours to understand peak engagement period of the application

**2. Track Crash Events** -	Track any crash events with a detailed log of the user activity to debug any issue that the user is facing on the ground

**3. Setup Monitoring Alerts** - Setup email alerts for different monitoring objectives such as new type of crash event observed, CPU usage >75%, disk space >80% and more

**4. Visualize Monitoring Data** - Visualize all application events to understand trends of usage behaviour of your application through a single view