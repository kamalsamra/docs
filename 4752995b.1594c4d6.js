(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(1),s=a(9),i=(a(0),a(222)),r={id:"ParikshaFuncSpecs",title:"Pariksha - Functional Specifications",sidebar_label:"Pariksha FuncSpecs"},o={id:"ParikshaFuncSpecs",title:"Pariksha - Functional Specifications",description:"![Licence](https://img.shields.io/badge/Licence-MIT-blue.svg)",source:"@site/docs/Functional Specs Pariksha.md",permalink:"/docs/docs/ParikshaFuncSpecs",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Functional Specs Pariksha.md",sidebar_label:"Pariksha FuncSpecs",sidebar:"someSidebar",previous:{title:"Deploy Your Own Samwad",permalink:"/docs/docs/deploysamwad"},next:{title:"Deploy Your Own Pariksha",permalink:"/docs/docs/deploypariksha"}},c=[{value:"1. Introduction",id:"1-introduction",children:[]},{value:"2. Pariksha Overview",id:"2-pariksha-overview",children:[{value:"2.1 Governance Use Cases",id:"21-governance-use-cases",children:[]},{value:"2.2 Usage Status Across India",id:"22-usage-status-across-india",children:[]},{value:"2.3 Key Benefits",id:"23-key-benefits",children:[]},{value:"2.4 Typical Existing Alternatives",id:"24-typical-existing-alternatives",children:[]},{value:"2.5 Core Features",id:"25-core-features",children:[]},{value:"2.6 Technical Architecture",id:"26-technical-architecture",children:[]}]},{value:"3. High Level Specifications",id:"3-high-level-specifications",children:[{value:"3.1 Configurable Assessments",id:"31-configurable-assessments",children:[]},{value:"3.2 Configurable Mobile Application",id:"32-configurable-mobile-application",children:[]},{value:"3.3 Student Management &amp; User Authentication",id:"33-student-management--user-authentication",children:[]},{value:"3.4 Visualize Assessment Information",id:"34-visualize-assessment-information",children:[]},{value:"3.5 Monitor Application Performance",id:"35-monitor-application-performance",children:[]}]},{value:"4. For Administrators (How-To-Configure Guides)",id:"4-for-administrators-how-to-configure-guides",children:[{value:"4.1 Manage Application Metadata",id:"41-manage-application-metadata",children:[]},{value:"4.3 Create Visualizations of Submission Data",id:"43-create-visualizations-of-submission-data",children:[]}]},{value:"5. Frequently Asked Questions",id:"5-frequently-asked-questions",children:[]}],l={rightToc:c};function b(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/Licence-MIT-blue.svg",alt:"Licence"}))),Object(i.b)("h2",{id:"1-introduction"},"1. Introduction"),Object(i.b)("p",null,"Student assessments in government schools are primarily conducted using pen and paper, wherein students are expected to read questions from a paper and write their answers. Teachers are then expected to mark these answers and update the student register with the marks of the students. From the school register to the state level the data may travel through different modes of transport. The objective of this Pariksha product is to enable teachers to capture the detailed or summary results of the student assessments in a simple user friendly manner, in low or no connectivity networks with older android devices as well."),Object(i.b)("p",null,"The objective of Pariksha is to transform the use of student assessment data to inform State Education Department strategies. Pariksha is designed for this specific governance use case and is built on OpenSource in a modular, reusable and scalable manner. The application design is created with the assumption that the engineering team of the State National Informatics Centre or from a private technology firm working with the State Education Departments will be able to deploy and maintain this product with the documentation provided."),Object(i.b)("p",null,"Through Pariksha the State Education Department can have a mobile application with configurable student assessments. This application can be used by the government school teachers to update student assessment data. Management of users of this application, configuration of forms, visualization of the data collected and tracking of the application performance can all be managed within this application by non-technical functional owners within the State Education Department."),Object(i.b)("h2",{id:"2-pariksha-overview"},"2. Pariksha Overview"),Object(i.b)("h3",{id:"21-governance-use-cases"},"2.1 Governance Use Cases"),Object(i.b)("p",null,"The Pariksha product can be used for managing the following activities of the State Education Department:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Record student wise grades for different subjects across different assessments"),Object(i.b)("li",{parentName:"ol"},"Record class wise aggregate marks for different subjects across different assessments"),Object(i.b)("li",{parentName:"ol"},"Edit any previous student or class wise grades"),Object(i.b)("li",{parentName:"ol"},"View past assessments of students and classes"),Object(i.b)("li",{parentName:"ol"},"Real time tracking of student assessment data update by teachers"),Object(i.b)("li",{parentName:"ol"},"Monitor student assessments trends")),Object(i.b)("h3",{id:"22-usage-status-across-india"},"2.2 Usage Status Across India"),Object(i.b)("p",null,"Pariksha is being used by the State Education Departments Himachal Pradesh. Interestingly, the State Education Department of Himachal Pradesh has integrated the Pariksha features and Samwad features to have a single application that can collect student assessment results and also send SMS to parents."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://media.giphy.com/media/h4wmbf6dPyPiTjFp6f/giphy.gif",alt:null}))),Object(i.b)("p",null,"Total usage of the Pariksha product as on 12 April 2020 is summarized below:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Total active users >20,400"),Object(i.b)("li",{parentName:"ol"},"Total visit data submissions > 1,25,000")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Note: This usage is similar to the usage of the ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://samagra-development.github.io/docs/docs/SamwadFuncSpecs"}),"Samwad")," application as the functionality of this product has been integrated into the ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://samagra-development.github.io/docs/docs/SamwadFuncSpecs"}),"Samwad"),"  application for a particular state")),Object(i.b)("h3",{id:"23-key-benefits"},"2.3 Key Benefits"),Object(i.b)("p",null,"We have observed the following key benefits that the states using Pariksha have experienced."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"2.3.1 Reduction in time spent by department officials"))),Object(i.b)("p",null,"With the Pariksha application school leaders do not need to spend time to have the assessment data compiled, digitized, reviewed and the aggregated. Typically a process "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"2.3.2 Reduction in usage of paper and money spent"))),Object(i.b)("p",null,"With Pariksha, significant expenditure printing paper for recording the student assessments or class wise summary of assessment results and also for conducting data entry through data entry operators is avoided. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"2.3.3 Higher probability of accurate information"))),Object(i.b)("p",null,"With the data entry for student assessment data being conducted at source by the teachers responsible for the assessments the accuracy of the assessment data increases. If there are any concerns the same can be immediately addressed by the concerned teachers."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"2.3.4 Ability to monitor data filled and drive timely compliance "))),Object(i.b)("p",null,"With student assessment data entry on Pariksha, the status of the assessment data uploada are available real-time for the state education department officials to understand the progress of the data entry exercise."),Object(i.b)("h3",{id:"24-typical-existing-alternatives"},"2.4 Typical Existing Alternatives"),Object(i.b)("p",null,"There are existing alternative processes that can be used for conducting these monitoring visits. These have been summarized below:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"2.4.1 Decentralized School Level Data Entry Managed By School Staff"))),Object(i.b)("p",null,"Data entry is often conducted by the teachers at the school level by entering data into a web portal through a computer available at the school premises. The key challenge of this process is the ability of different teachers to allocate time to access the computer within the school premises at a reasonable hour and without disrupting regular classes. Often, when teachers are not comfortable to use the computer, they allocate a teacher or hire a local data entry operator to conduct this data entry exericse. This leads to delay and decrease in the quality of the data updated."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"2.4.2 Data Entry By Private Data Entry Operators"))),Object(i.b)("p",null,"Data entry operators are often hired locally by the State Education Department at the block or district levels to enter the student assessment data. The key challenge of this process, in addition to the cost involved, is to manage the entry of all the student assessment data within the planned timelines. This process often gets delayed and thereby limits the usage of this information during department reviews."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"2.4.3 OMR Based Data Collection"))),Object(i.b)("p",null,"Some State Education Departments have also been using the OMR based data collection method to update the assessment data. This OMR data is updated by the school teachers and is then scanned at district, zonal or state level based on the availability of the OMR scanning machines. This method involves extensive logistics as these OMR sheets are designed, printed, updated, collected, transported, scanned and then used for verification before finally being archived. In addition to the logistics there is substantial expenditure on conducting this OMR based assessment data collection exercise."),Object(i.b)("h3",{id:"25-core-features"},"2.5 Core Features"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"2.5.1 For State Education Department Teachers"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Record student wise grades for different subjects across different assessments"),Object(i.b)("li",{parentName:"ul"},"Record class wise aggregate marks for different subjects across different assessments"),Object(i.b)("li",{parentName:"ul"},"Edit any previous student or class wise grades"),Object(i.b)("li",{parentName:"ul"},"View past assessments of students and classes"),Object(i.b)("li",{parentName:"ul"},"Manage student addressbook (with basic details of the students)"),Object(i.b)("li",{parentName:"ul"},"Ability to update their own profile information")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"2.5.2 For State Department Reviewers"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ability to view, in real time, status of student assessment data entry"),Object(i.b)("li",{parentName:"ul"},"Ability to view, in real time, complete details or summarized views of the student assessments"),Object(i.b)("li",{parentName:"ul"},"Ability to view, in real time, details of the student addressbook")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"2.5.3 For Process Administrators"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ability to create and manage student assessments"),Object(i.b)("li",{parentName:"ul"},"Ability to create and manage student profile variables"),Object(i.b)("li",{parentName:"ul"},"Ability to create and manage school teacher profiles"),Object(i.b)("li",{parentName:"ul"},"Ability to create visualizations of the visit submissions"),Object(i.b)("li",{parentName:"ul"},"Ability to view application performance statistics")),Object(i.b)("h3",{id:"26-technical-architecture"},"2.6 Technical Architecture"),Object(i.b)("p",null,"Pariksha is wired together using the ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"www.google.com"}),"Mobile Application Component"),", ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"www.google.com"}),"App Metadata Management Component"),", ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"www.google.com"}),"Database Management Component"),", ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"www.google.com"}),"Data Analytics Component")," & ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"www.google.com"}),"Application Logging Component")),". The following diagram illustrates the technical architecture of the Pariksha product."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"../img/parikshaarchitecture.png",alt:"alt-text"}))),Object(i.b)("h2",{id:"3-high-level-specifications"},"3. High Level Specifications"),Object(i.b)("h3",{id:"31-configurable-assessments"},"3.1 Configurable Assessments"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://media.giphy.com/media/VHq4YVYLuBNXM9ReDX/giphy.gif",alt:null}))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.1.1 Design Assessments"))),Object(i.b)("p",null,"Configure assessments to capture student wise grades or class wise learning outcome performance data. This structure provides the flexibility for state education departments to capture only the information that is required at a state level. For assessments designed by the state, question level data can be configured."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.1.2 Manage Submission Timelines"))),Object(i.b)("p",null,"Administrator of the application can define the deadline for the assessment collection exercise. This date and time is visible to all the users and the assessment editing facility is automatically locked once the deadline elapses."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.1.3 Offline Enabled"))),Object(i.b)("p",null,"All the assessment data collection can be done offline. The data collection by teachers is expected to be completed over multiple sittings and therefore the teachers can add the data even if they are offline. Once the users come online the data will be logically synced online."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.1.4 Bilingual"))),Object(i.b)("p",null,"All the information on the application can be viewed by the teacher in multiple languages based on the preference of the state education department. The user can change the language whenever required."),Object(i.b)("h3",{id:"32-configurable-mobile-application"},"3.2 Configurable Mobile Application"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://media.giphy.com/media/cNZgpHMDwa3S5OlxNn/giphy.gif",alt:null}))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.2.1 Whitelabel UI"))),Object(i.b)("p",null,"Whitelabel the mobile application by adding the theme colors, splash screens, login screens, logos, about us information based on your department branding."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.2.2 Add / Remove Pages"))),Object(i.b)("p",null,"Add custom pages within the application to share information with the users about the purpose of the application, tutorial videos, helpline numbers, and instructions."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.2.3 Jurisdiction Data"))),Object(i.b)("p",null,"Update jurisdiction data consisting of districts, blocks, cluster, GPs, schools and more live from the backend. If a new school, GP or cluster is added it can be made live immediately."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.2.4 Notifications"))),Object(i.b)("p",null,"Define and serve in-app trigger based notifications to users to guide them through the user flow of updating and viewing all, current and historic, assessments data."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"A configurable mobile application can be setup by deploying the Pariksha application. Refer to this ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"www.google.com"}),"Section")," to deploy the application yourself. Once the applicaton is installed you can further read about how to customize ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"www.google.com"}),"Ancillary Screens"),", update ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"www.google.com"}),"Jurisdiction Data")," and setup ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"www.google.com"}),"Notifications"),".")),Object(i.b)("h3",{id:"33-student-management--user-authentication"},"3.3 Student Management & User Authentication"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"admin console images to be added as GIFs")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.3.1 Student Management"))),Object(i.b)("p",null,"Student details can be added by the teachers. These details can be configured based on the requirements of the state education department such as student name, admission number, parent contact number, gender, category and so on."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.3.2 Historic Student Assessment Data"))),Object(i.b)("p",null,"Student assessment data is managed in such a manner that for any student who may migrate or leave a school in the middle of the year, the assessment data is always stored. If the student moves to another govt school in the state then the teachers can view the past assessment data of student, if required as well"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.3.3 User Management"))),Object(i.b)("p",null,"Create and manage users through a pre-designed admin panel. Allow users to view or edit specific variables of their profile information through the mobile application itself. Often latest contact numbers for all teachers are not available and though this application teachers can update that information."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.3.4 OTP Based Password Reset"))),Object(i.b)("p",null,"Users can reset their passwords though an SMS based password reset functionality. If user credentials are created for a block office then if a BEO is transferred the new BEO can update his/her details and continue using the application seamlessly."),Object(i.b)("h3",{id:"34-visualize-assessment-information"},"3.4 Visualize Assessment Information"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://media.giphy.com/media/Wp0eqM753Js4OtcW6U/giphy.gif",alt:null}))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.4.1 Easy to Configure Graphs"))),Object(i.b)("p",null,"Create visualizations with a few clicks using Metabase, a configurable visualization tool with detailed documentation"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.4.2 Filtered Views"))),Object(i.b)("p",null,"Add filters to graphs to show data grouped by any variable in your dataset. Typically used for grouping data by class, school, cluster, block, district, or academic year."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.4.3 Add Images & Logos"))),Object(i.b)("p",null,"Insert government state education department logos and local on-ground images across dashboards to make them look consistent to the state department branding."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.4.4 Generate PDF Views"))),Object(i.b)("p",null,"Configure PDFs for dashboard views to enable users to download and print different views of the dashboard. This is typically used by block officers to put up monthly dashboard based report on notice boards in their offices or by teachers in schools."),Object(i.b)("h3",{id:"35-monitor-application-performance"},"3.5 Monitor Application Performance"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://media.giphy.com/media/ehU21iWSH540I7clAl/giphy.gif",alt:null}))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.5.1 Track User Engagement"))),Object(i.b)("p",null,"Track user engagement at a per minute, per 30 minutes, per 24 hours to understand peak engagement period of the application"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.5.2 Track Crash Events"))),Object(i.b)("p",null,"Track any crash events with a detailed log of the user activity to debug any issue that the user is facing on the ground"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.5.3 Setup Monitoring Alerts"))),Object(i.b)("p",null,"Setup email alerts for different monitoring objectives such as new type of crash event observed, CPU usage >75%, disk space >80% and more"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"3.5.4 Visualize Monitoring Data"))),Object(i.b)("p",null,"Visualize all application events to understand trends of usage behaviour of your application through a single view"),Object(i.b)("h2",{id:"4-for-administrators-how-to-configure-guides"},"4. For Administrators (How-To-Configure Guides)"),Object(i.b)("h3",{id:"41-manage-application-metadata"},"4.1 Manage Application Metadata"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"4.1.1 User Management"))),Object(i.b)("p",null,"In Pariksha, there is an admin console that can be enabled to allows administrators of the application at the state or district level to manage user authentication for the application. The typical feature set that is enabled through this admin console has been listed below."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Addition of users"),Object(i.b)("li",{parentName:"ul"},"View user information"),Object(i.b)("li",{parentName:"ul"},"Edit details of existing users"),Object(i.b)("li",{parentName:"ul"},"Delete users"),Object(i.b)("li",{parentName:"ul"},"Reset password of existing users")),Object(i.b)("p",null,"The entire admin console is configurable. You can select what you want to see, how you want to see it (graph, table etc) and what you want to edit."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"4.1.2 Metadata Management"))),Object(i.b)("p",null,"In addition you can also update ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"metadata"))," of the application in this console. This application metadata would typically include the following details."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"School Details (School Name, UDISE, Type of School, Total Enrolment, GPS Coordinates etc)"),Object(i.b)("li",{parentName:"ul"},"Administrative Location Mapping (District, Block, Cluster, GP etc)"),Object(i.b)("li",{parentName:"ul"},"Monitor Designation Wise Visit Targets")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"4.1.3 User Designation to Form Mapping"))),Object(i.b)("p",null,"By managing the configuration of the access control for forms you can give different users access to different set of forms. The following steps will enable users to define the DESIGNATION to ROLE mapping and ROLE to FORM mapping."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Define roles (according to different combination of designations for which forms are to be made visible)"),Object(i.b)("li",{parentName:"ul"},"Update the roles to form mapping (in the Role Based Form Access section in the admin console)"),Object(i.b)("li",{parentName:"ul"},"View updated forms based on the role mapping")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"4.1.4 Configure Assessments"))),Object(i.b)("p",null,"to be added"),Object(i.b)("h3",{id:"43-create-visualizations-of-submission-data"},"4.3 Create Visualizations of Submission Data"),Object(i.b)("p",null,"All the data collected through the Pariksha application can be linked to Metabase to analyse data in the form of dashboards. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://metabase.com"}),"Metabase")," is an Open Source tool for data visualization. It can be used to display any data in different formats like bar graphs, pie charts, tables etc. "),Object(i.b)("p",null,"Metabase dashboards are simple to use and highly configurable. You can view this ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.metabase.com/docs/latest/users-guide/start.html"}),"Metabase documentation")," for how to setup basic graphs. A few key sections from this page that we typically refer to while building Metabase dashboards are listed below."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://media.giphy.com/media/WOla6gFeitQoNM0eI1/giphy.gif",alt:null}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.metabase.com/docs/latest/users-guide/01-what-is-metabase.html"}),"Overview of Metabase")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.metabase.com/docs/latest/users-guide/02-database-basics.html"}),"Basics of Databases")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.metabase.com/docs/latest/users-guide/03-basic-exploration.html"}),"Basic Exploration in Metabase")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.metabase.com/docs/latest/users-guide/04-asking-questions.html"}),"Asking questions in Metabase")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.metabase.com/docs/latest/users-guide/start.html"}),"Asking custom questions in Metabase")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.metabase.com/docs/latest/users-guide/05-visualizing-results.html"}),"Using Metabase Visualizations")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.metabase.com/docs/latest/users-guide/06-sharing-answers.html"}),"Sharing and organizing your saved questions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.metabase.com/docs/latest/users-guide/07-dashboards.html"}),"Creating dashboards")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.metabase.com/docs/latest/users-guide/08-dashboard-filters.html"}),"Adding filters to dashboards"))),Object(i.b)("p",null,"To view existing Metabase dashboards being used by different State Education Departments using Pariksha are available below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://sites.google.com/samagragovernance.in/sakshamhry/elementary/sat-student-assessment-tests?authuser=0"}),"Saksham SAT Dashboards"),", Haryana"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://hp-samarth.herokuapp.com"}),"Samarth Assessment Dashboards"),", Himachal Pradesh")),Object(i.b)("h2",{id:"5-frequently-asked-questions"},"5. Frequently Asked Questions"),Object(i.b)("p",null,"To be added based on comments recieved"))}b.isMDXComponent=!0},222:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),s=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=s.a.createContext({}),b=function(e){var t=s.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p=function(e){var t=b(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||i;return a?s.a.createElement(m,o({ref:t},l,{components:a})):s.a.createElement(m,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var l=2;l<i;l++)r[l]=a[l];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);