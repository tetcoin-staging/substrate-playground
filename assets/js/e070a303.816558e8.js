(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{500:function(e,t,n){var r={"./locale":265,"./locale.js":265};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=500},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return h}));var r=n(3),a=n(7),i=n(0),s=n.n(i),o=n(91),c=n(284),d=n.n(c);d.a.initialize({startOnLoad:!0});var u=function(e){var t=e.chart;return Object(i.useEffect)((function(){d.a.contentLoaded()}),[]),s.a.createElement("div",{className:"mermaid"},t)},l={id:"architecture",title:"Architecture"},b={unversionedId:"building/architecture",id:"building/architecture",isDocsHomePage:!1,title:"Architecture",description:"Users can use a TypeScript base front end to communicate with a backend. This HTTP server is hosted on kubernetes and deploys custom theia (a web based VSCode IDE) containers via kubernetes API.",source:"@site/docs/building/architecture.md",sourceDirName:"building",slug:"/building/architecture",permalink:"/substrate-playground/docs/building/architecture",editUrl:"https://github.com/paritytech/substrate-playground/edit/master/website/docs/building/architecture.md",version:"current",frontMatter:{id:"architecture",title:"Architecture"},sidebar:"someSidebar",previous:{title:"Integration",permalink:"/substrate-playground/docs/extending/integration"},next:{title:"Build",permalink:"/substrate-playground/docs/building/build"}},p=[{value:"Frontend",id:"frontend",children:[]}],m={toc:p};function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Users can use a TypeScript base front end to communicate with a backend. This HTTP server is hosted on kubernetes and deploys custom ",Object(o.b)("a",{parentName:"p",href:"https://www.theia-ide.org/"},"theia")," (a web based VSCode IDE) containers via kubernetes API."),Object(o.b)("p",null,"A session is the deployment of a template for a user at a time.\nA user can have a single session at a time.\nTemplate details can be updated (ports, ..) as well as session details (maxDuration)"),Object(o.b)("p",null,"Session details can also be updated during the lifetime of a session"),Object(o.b)("h2",{id:"frontend"},"Frontend"),Object(o.b)(u,{chart:"\nstateDiagram-v2\n    [*] --\x3e Terms\n    Terms --\x3e Terms: ignored\n    Terms --\x3e Unlogged: accepted\n    Unlogged --\x3e Panel: login\n    Panel --\x3e Unlogged: logout\n    Panel --\x3e Panel: select panel\n",mdxType:"Mermaid"}))}h.isMDXComponent=!0}}]);