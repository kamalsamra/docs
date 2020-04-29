(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{180:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var c=t(1),a=t(9),o=(t(0),t(222)),i={id:"CommunicatingAmongModules",title:"Communicating Among Modules",sidebar_label:"Communicating Among Modules"},r={id:"CommunicatingAmongModules",title:"Communicating Among Modules",description:"## 1. Overview - How to communicate among different app modules?",source:"@site/docs/Communicating Among Modules.md",permalink:"/docs/docs/CommunicatingAmongModules",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Communicating Among Modules.md",sidebar_label:"Communicating Among Modules",sidebar:"someSidebar",previous:{title:"App Logging",permalink:"/docs/docs/Grove"},next:{title:"Application Control",permalink:"/docs/docs/COAppControl"}},l=[{value:"1. Overview - How to communicate among different app modules?",id:"1-overview---how-to-communicate-among-different-app-modules",children:[]},{value:"2. Usage tips",id:"2-usage-tips",children:[]}],b={rightToc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(c.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-overview---how-to-communicate-among-different-app-modules"},"1. Overview - How to communicate among different app modules?"),Object(o.b)("p",null,"To get the context of the section, please refer ",Object(o.b)("a",Object(c.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/docs/GettingStarted#event-configuring"}),"this section"),"."),Object(o.b)("a",{href:"https://imgflip.com/gif/3wxi92"},Object(o.b)("img",{src:"https://i.imgflip.com/3wxi92.gif",title:"made at imgflip.com"})),Object(o.b)("h2",{id:"2-usage-tips"},"2. Usage tips"),Object(o.b)("p",null,"We recommend obtaining a single instance of bus through injection or another appropriate mechanism. Alternatively, you may get a singleton like the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),"Bus bus = BusProvider.getInstance();\n")),Object(o.b)("p",null,"Or You could provide a getter at your application level class to get the instance of the RxBus. (like we have used)."),Object(o.b)("p",null,"By default, the Bus enforces that all interactions occur on the main thread. "),Object(o.b)("p",null,"You can create RxBus like below."),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),"public class RxBus {\n\n    public RxBus() {\n    }\n\n    private PublishSubject<Object> bus = PublishSubject.create();\n\n    public void send(Object o) {\n        bus.onNext(o);\n    }\n\n    public Observable<Object> toObservable() {\n        return bus;\n    }\n\n}\n")),Object(o.b)("p",null,"Now, we will create the Singleton(single instance) of RxBus in our application class or at any other place as below:"),Object(o.b)("p",null,"How to access the RxBus has been mentioned above already."),Object(o.b)("p",null,"You can subscribe for an event in any class like below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),'compositeDisposable.add(this.getEventBus()\n\n.toObservable().subscribeOn(Schedulers.io())\n\n.observeOn(AndroidSchedulers.mainThread())\n\n.subscribe(exchangeObject -> {\n\nif (exchangeObject instanceof ExchangeObject) {\n\nif (((ExchangeObject) exchangeObject).to == Modules.MAIN_APP\n\n&& ((ExchangeObject) exchangeObject).from == Modules.ANCILLARY_SCREENS\n\n&& ((ExchangeObject) exchangeObject).type == ExchangeObject.ExchangeObjectTypes.SIGNAL) {\n\nExchangeObject.SignalExchangeObject signalExchangeObject = (ExchangeObject.SignalExchangeObject) exchangeObject;\n\nif (signalExchangeObject.shouldStartAsNewTask ){\n\nif(currentActivity != null){\n\nCommonUtilities.startActivityAsNewTask(signalExchangeObject.intentToLaunch, currentActivity);\n\n}}\n\nelse\n\nstartActivity(signalExchangeObject.intentToLaunch);\n\n} else if (exchangeObject instanceof ExchangeObject.EventExchangeObject) {  ExchangeObject.EventExchangeObject eventExchangeObject = (ExchangeObject.EventExchangeObject) exchangeObject;\n\nTimber.d("Event Received %s ", eventExchangeObject.customEvents);\n\nif (eventExchangeObject.to == Modules.MAIN_APP || eventExchangeObject.to == Modules.PROJECT) {\n\nTimber.d("Event Received %s ", eventExchangeObject.customEvents);\n\n}\n\n} else if(exchangeObject instanceof ExchangeObject.NotificationExchangeObject){\n\nPendingIntent pendingIntent = ((ExchangeObject.NotificationExchangeObject) exchangeObject).data.getIntent();\n\nint notificationID = ((ExchangeObject.NotificationExchangeObject) exchangeObject).data.getNotificationID();\n\nint title = ((ExchangeObject.NotificationExchangeObject) exchangeObject).data.getTitle();\n\nString body = ((ExchangeObject.NotificationExchangeObject) exchangeObject).data.getBody();\n\nTimber.d("Event Received for Push Notification %s ", title);\n\n}else {\n\nTimber.d("Received but not intended");\n\n}\n\n}\n\n}, Timber::e));\n\n')),Object(o.b)("p",null,"You can send an event from any other class or from the same class like below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),"MyApplication.getInstance().component().rxBus().send(new EventTypeExhangeObject());\n        \n")),Object(o.b)("p",null,"This way, you have the EventBus pattern with RxJava, RxBus. But if there is some error, it will terminate, so to avoid that check ",Object(o.b)("a",Object(c.a)({parentName:"p"},{href:"https://github.com/JakeWharton/RxRelay"}),"RxRelay"),"."),Object(o.b)("p",null,"RxRelay: A Subject except without the ability to call onComplete or onError."))}s.isMDXComponent=!0},222:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var c=t(0),a=t.n(c);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,c,a=function(e,n){if(null==e)return{};var t,c,a={},o=Object.keys(e);for(c=0;c<o.length;c++)t=o[c],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)t=o[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),s=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):r({},n,{},e)),t},u=function(e){var n=s(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=Object(c.forwardRef)((function(e,n){var t=e.components,c=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=c,m=u["".concat(i,".").concat(g)]||u[g]||p[g]||o;return t?a.a.createElement(m,r({ref:n},b,{components:t})):a.a.createElement(m,r({ref:n},b))}));function m(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var o=t.length,i=new Array(o);i[0]=g;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:c,i[1]=r;for(var b=2;b<o;b++)i[b]=t[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);