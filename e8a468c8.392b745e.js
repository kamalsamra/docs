(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(9),i=(n(0),n(202)),o={id:"COMobileApplication",title:"Component Overview (Mobile Application)",sidebar_label:"Component Overview"},l={id:"COMobileApplication",title:"Component Overview (Mobile Application)",description:"![Licence](https://img.shields.io/badge/Licence-MIT-blue.svg)",source:"@site/docs/Component Overview Mobile Application.md",permalink:"/docs/docs/COMobileApplication",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Component Overview Mobile Application.md",sidebar_label:"Component Overview",sidebar:"someSidebar",previous:{title:"Components Overview",permalink:"/docs/docs/ComponentsOverview"},next:{title:"Getting Started with Samargra Mobile App Package",permalink:"/docs/docs/GettingStartedMobileComponent"}},c=[{value:"1. Introduction",id:"1-introduction",children:[]},{value:"2. Use cases",id:"2-use-cases",children:[]},{value:"3. Component Design",id:"3-component-design",children:[]},{value:"Libraries used",id:"libraries-used",children:[]}],b={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/badge/Licence-MIT-blue.svg",alt:"Licence"}))),Object(i.b)("h2",{id:"1-introduction"},"1. Introduction"),Object(i.b)("p",null,"On-ground data collection activities conducted by different departments of the state and central governments have been increasingly conducted using mobile devices or tablets. To facilitate this upward trend of digital first data collection methods in the government, we have envisioned a opensource based modular design for a mobile application that can be scaled and reused efficiently for different governance use cases. After working closely with different state governments we have identified and abstracted common governance use cases that are typically required for on-ground data collection activities. These use cases have informed our architectural design for creating mobile applications for data collection. "),Object(i.b)("p",null,"This documentation of mobile application will give you an overview of what are the different use cases that inform the design of the component, how would you get started to deploy this component, what are the different modules within this component and additional reference information in case you want to dive deeper into the implementation of this component. "),Object(i.b)("h2",{id:"2-use-cases"},"2. Use cases"),Object(i.b)("p",null,"The following list includes a set of use cases abstracted from different on-ground state department functions."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Configure data collection forms"),Object(i.b)("li",{parentName:"ol"},"View submission data"),Object(i.b)("li",{parentName:"ol"},"Manage user profiles of on-ground officials"),Object(i.b)("li",{parentName:"ol"},"Configure additional information in the application (support content, helpline numbers)"),Object(i.b)("li",{parentName:"ol"},"Seamless in-application information update (for addition of administrative information such as schools, blocks, GPs, etc)"),Object(i.b)("li",{parentName:"ol"},"Offline application functioning for remote or low connectivity areas")),Object(i.b)("h2",{id:"3-component-design"},"3. Component Design"),Object(i.b)("p",null,"The mobile application component is developed using ",Object(i.b)("strong",{parentName:"p"},"multi-modular architecture")," with ",Object(i.b)("strong",{parentName:"p"},"independently functioning modules"),". "),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"../img/component1v2.png",alt:"alt-text"}))),Object(i.b)("p",null,"The following table provides an overview of the different modules within the mobile applicaton component, the opensource libraries used for each and the additions we have done to the opensource libraries to have them architecturally and functionally aligned to our component design. "),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Module Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null})))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Form Management Module"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1. Integrate and setup data collection tool ",Object(i.b)("br",null),"2. Manage form access and submissions.",Object(i.b)("br",null),"3. View form submissions.",Object(i.b)("br",null),Object(i.b)("strong",{parentName:"td"},"Libraries used"),": ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/getodk/collect"}),"ODK Collect"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Ancilliary Screen Module"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"User can view custom designed screens at various points in the user flows such as:",Object(i.b)("br",null),"1. Application start (Splash screen)",Object(i.b)("br",null),"2. First-time login (guided onboarding screens)",Object(i.b)("br",null),"3. View information about the app (About Us screen)",Object(i.b)("br",null),"4. App usage guide/tutorials screen",Object(i.b)("br",null),Object(i.b)("strong",{parentName:"td"},"Libraries used"),": ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/getodk/collect"}),"ODK Collect"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Profile Screen Module"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"User can manage his/her profile and conduct the following functions:",Object(i.b)("br",null),"1. View all editable and non-editable profile fields",Object(i.b)("br",null),"2. Edit profile details",Object(i.b)("br",null),"3. Reset passwords using OTP method")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Offline Handling Module"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"User can use the application in offline mode:",Object(i.b)("br",null),"1. Add/Edit/Delete any data in different sections of the application",Object(i.b)("br",null),"2. Data is automatically synced for the user once the device is online")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Cascading Dropdown Module"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"User can select fields from the application metadata and have the following based on the data selection:",Object(i.b)("br",null),"1. Change in the forms shown to the users (users can view different forms based on the dropdown)",Object(i.b)("br",null),"2. Pre-fill in the data input forms (based on the variable mapping pre-defined in the data input form)",Object(i.b)("br",null),"3. In addition, cascading dropdown as pre-fill based on the profile of the users (Program Mission Director only sees cascading dropdown for 6/10 districts where the mission is ongoing)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Push Notification Module"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1. Integrating FCM firebase token to send push notifications",Object(i.b)("br",null),"2. Ability to generate push notifications",Object(i.b)("br",null),"3. Generate in-app notifications")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mobile Application Logging Module"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1. Generate Logs for Application",Object(i.b)("br",null),"2. Receive Crash Notifications via Email",Object(i.b)("br",null),"3. Remote crash logging",Object(i.b)("br",null),"4. Push User App logs for further debugging")))),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"../img/architecture.png",alt:"alt-text"}))),Object(i.b)("h2",{id:"libraries-used"},"Libraries used"),Object(i.b)("p",null,"We are using the following libraries to drive the functionalites within our app package."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Libraries Used"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Features offered"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Dagger2"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Android Dependency injection framework")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RxJava",Object(i.b)("br",null),"RxAndroidNetworking"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Java based implementation of Reactive Programming",Object(i.b)("br",null),"Android library for doing any type of networking call in Android applications which is made on top of Retrofit")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Butterknife"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"View binding tool for Android layouts.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Timber"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Android App Logging")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sentry"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Android Crash Monitoring")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Firebase"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1. FCM for push notifications",Object(i.b)("br",null),"2. Firebase Remote config to control remote user-related variables")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Android Work Manager"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1. Android library used to enqueue deferrable work that is guaranteed to execute sometime after its Constraints are met.",Object(i.b)("br",null),"2. We use it to store user actions performed in offline environments")))))}s.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||i;return n?r.a.createElement(m,l({ref:t},b,{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);