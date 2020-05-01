(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{196:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(1),o=t(9),a=(t(0),t(222)),i={id:"UserManagement",title:"User Management",sidebar_label:"User Management"},c={id:"UserManagement",title:"User Management",description:"## 1. Overview",source:"@site/docs/Admin - User Management.md",permalink:"/docs/docs/UserManagement",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Admin - User Management.md",sidebar_label:"User Management",sidebar:"someSidebar",previous:{title:"Application Control Console",permalink:"/docs/docs/AppControlPanel"},next:{title:"User Authentication",permalink:"/docs/docs/UserAuthentication"}},s=[{value:"1. Overview",id:"1-overview",children:[]},{value:"2. Getting Started",id:"2-getting-started",children:[{value:"2.1 Installation",id:"21-installation",children:[]},{value:"2.2 Usage",id:"22-usage",children:[]},{value:"2.3 Configuring the views",id:"23-configuring-the-views",children:[]}]},{value:"FAQs",id:"faqs",children:[]},{value:"Coming Soon",id:"coming-soon",children:[]}],u={rightToc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"1-overview"},"1. Overview"),Object(a.b)("p",null,"Since we store all our users in FusionAuth, it makes sence to decouple management bit that from the critical server part of it. So we created a UserManagement package that enables you to manage FusionAuth users, right inside your Mission crontrol system."),Object(a.b)("h2",{id:"2-getting-started"},"2. Getting Started"),Object(a.b)("h3",{id:"21-installation"},"2.1 Installation"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ npm install --save ra-data-fusionauth\n")),Object(a.b)("h3",{id:"22-usage"},"2.2 Usage"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"ra-data-fusionauth")," provider config object:"),Object(a.b)("p",null,"`{"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"'fusionAuthURL': '<Fusion Auth Url>',\n'fusionAuthAPIKey': '<Fusion Auth Api Key>',\n'fusionAuthApplicationId': '<Fusion Auth Application Id>'\n")),Object(a.b)("p",null,"}`"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"fusionauthDataProvider( config)\n")),Object(a.b)("p",null,"In the following example, we import ",Object(a.b)("inlineCode",{parentName:"p"},"fusionauthDataProvider")," from ",Object(a.b)("inlineCode",{parentName:"p"},"ra-data-fusionauth")," and give it the fusionauth config."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport UserIcon from '@material-ui/icons/Group';\nimport {Admin, Resource, ListGuesser, ShowGuesser} from 'react-admin';\nimport fusionauthDataProvider from 'ra-data-fusionauth';\n\n// The following components are created when following the react-admin tutorial\nimport UserList from './src/Userlist';\nimport {UserCreate, UserEdit} from './src/UserResource';\n\nfunction App() {\n  const dataProvider = DataProvider({\n    fusionAuthURL: '<Fusion Auth Url>',\n    fusionAuthAPIKey: '<Fusion Auth Api Key>',\n    fusionAuthApplicationId: '<Fusion Auth Application Id>',\n  });\n\n  return (\n    <Admin dataProvider={dataProvider}>\n      <Resource\n        name=\"user\"\n        list={UserList}\n        show={ShowGuesser}\n        edit={UserEdit}\n        create={UserCreate}\n        icon={UserIcon}\n      />\n    </Admin>\n  );\n}\nexport default App;\n")),Object(a.b)("h3",{id:"23-configuring-the-views"},"2.3 Configuring the views"),Object(a.b)("p",null,"A sample ",Object(a.b)("inlineCode",{parentName:"p"},"UserCreate")," and ",Object(a.b)("inlineCode",{parentName:"p"},"UserList")," functions can look like these."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'export const UserCreate = props => (\n  <Create {...props}>\n    <SimpleForm>\n      <TextInput source="firstName" />\n      <TextInput source="lastName" />\n      <TextInput source="username" />\n      <TextInput source="mobilePhone" />\n      <PasswordInput source="password" />\n    </SimpleForm>\n  </Create>\n);\n\nexport const UserEdit = props => (\n  <Edit {...props}>\n    <SimpleForm>\n      <TextInput source="firstName" />\n      <TextInput source="lastName" />\n      <TextInput source="username" />\n      <TextInput source="mobilePhone" />\n      <TextInput source="email" />\n      <BooleanInput source="active" />\n      <TextInput source="data.phone" label={\'Phone\'} />\n      <SelectInput\n        label={\'District\'}\n        source="data.district"\n        choices={disctritChoices}\n        optionText="name"\n        optionValue="id"\n      />\n    </SimpleForm>\n  </Edit>\n);\n')),Object(a.b)("h2",{id:"faqs"},"FAQs"),Object(a.b)("h2",{id:"coming-soon"},"Coming Soon"))}l.isMDXComponent=!0},222:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},p=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return t?o.a.createElement(b,c({ref:n},u,{components:t})):o.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);