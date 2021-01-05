(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(85)),i={id:"custom-template",title:"Custom Template"},l={unversionedId:"extending/custom-template",id:"extending/custom-template",isDocsHomePage:!1,title:"Custom Template",description:"External users can provide and maintain templates used by the playground.",source:"@site/docs/extending/custom-template.md",slug:"/extending/custom-template",permalink:"/substrate-playground/docs/extending/custom-template",editUrl:"https://github.com/paritytech/substrate-playground/edit/master/website/docs/extending/custom-template.md",version:"current",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/substrate-playground/docs/"},next:{title:"Integration",permalink:"/substrate-playground/docs/extending/integration"}},c=[{value:"Custom commands",id:"custom-commands",children:[]},{value:"Github workflow",id:"github-workflow",children:[{value:"Github secrets",id:"github-secrets",children:[]}]},{value:"Deployment workflow",id:"deployment-workflow",children:[]}],s={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"External users can provide and maintain templates used by the playground."),Object(o.b)("p",null,"To create a template the following steps are mandatory:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"create ",Object(o.b)("inlineCode",{parentName:"li"},".devcontainer/devcontainer.json")," (find an example ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/paritytech/substrate-playground/blob/develop/.github/workflow-templates/devcontainer.json"}),"here"),")"),Object(o.b)("li",{parentName:"ul"},"create a Github worflow that build this image then dispatches an event to ",Object(o.b)("inlineCode",{parentName:"li"},"substrate-playground")," (find an example ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/paritytech/substrate-playground/blob/develop/.github/workflow-templates/cd-template.yml"}),"here"),")")),Object(o.b)("p",null,"Additionally there are a number of standard VSCode configuration files that will be leveraged by the playground:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},".vscode/settings.json (see ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://code.visualstudio.com/docs/getstarted/settings"}),"https://code.visualstudio.com/docs/getstarted/settings"),")"),Object(o.b)("li",{parentName:"ul"},".vscode/launch.json"),Object(o.b)("li",{parentName:"ul"},".vscode/tasks.json"),Object(o.b)("li",{parentName:"ul"},".vscode/snippets.code-snippets")),Object(o.b)("p",null,"After the associated Github ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paritytech/substrate-playground/blob/develop/.github/workflows/event-template-updated.yml"}),"workflow")," in substrate-playground is triggered, playground will use the newly built image. "),Object(o.b)("h2",{id:"custom-commands"},"Custom commands"),Object(o.b)("p",null,"Replace ENV, USER, HOST (via ${containerEnv:VAR_NAME})"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"preCreateCommand")," is executed "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"preContainerStartCommand")," via Init Containers, can write files"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"postContainerStartCommand")," via Container lifecycle hooks, run inside the container"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"preContainerStopCommand")," via Container lifecycle hooks, run inside the container"),Object(o.b)("p",null,"Container killed after ",Object(o.b)("inlineCode",{parentName:"p"},"terminationGracePeriodSeconds")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.linkedin.com/pulse/kubernetes-deep-dive-part-1-init-containers-lifecycle-chauthaiwale/"}),"https://www.linkedin.com/pulse/kubernetes-deep-dive-part-1-init-containers-lifecycle-chauthaiwale/")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/fr/docs/concepts/containers/container-lifecycle-hooks/"}),"https://kubernetes.io/fr/docs/concepts/containers/container-lifecycle-hooks/")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"preStartCommand")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"postStartCommand")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"postAttachCommand"),") are executed "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"menuActions")," "),Object(o.b)("p",null,"TODO: support string and array syntax\nTODO: add postCreateCommand"),Object(o.b)("p",null,"Potential hooks:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"when image is created (",Object(o.b)("inlineCode",{parentName:"li"},"preCreateCommand"),")"),Object(o.b)("li",{parentName:"ul"},"when user deploy a template\n",Object(o.b)("strong",{parentName:"li"}," server side\n")," before theia loads\n** after theia is loaded, headless or in a shell")),Object(o.b)("h2",{id:"github-workflow"},"Github workflow"),Object(o.b)("p",null,"A template workflow can be found ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paritytech/substrate-playground/blob/develop/.github/workflow-templates/cd-template.yml"}),"here"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"client_payload")," must define ",Object(o.b)("inlineCode",{parentName:"p"},"id")," pointing to one of the existing ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paritytech/substrate-playground/blob/develop/conf/k8s/overlays/staging/"}),"templates"),".\nIt can also define a ",Object(o.b)("inlineCode",{parentName:"p"},"ref")," (branch/tag/commit used to build, defaults to ",Object(o.b)("em",{parentName:"p"},"master"),") and a ",Object(o.b)("inlineCode",{parentName:"p"},"dockerFile")," location (default to ",Object(o.b)("em",{parentName:"p"},".devcontainer/Dockerfile"),")"),Object(o.b)("p",null,"This workflow will trigger the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paritytech/substrate-playground/blob/develop/.github/workflows/event-template-updated.yml"}),Object(o.b)("em",{parentName:"a"},"template-updated")," workflow")," on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paritytech/substrate-playground/"}),"substrate-playground"),", including the following actions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"create and publish a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/paritytech/substrate-playground/blob/develop/templates/Dockerfile.template"}),"composite docker image")," from the new template one and latest ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/paritytech/substrate-playground/blob/develop/templates/Dockerfile.base"}),"base one")),Object(o.b)("li",{parentName:"ul"},"update ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/paritytech/substrate-playground/tree/develop/conf/k8s/overlays/staging/templates"}),"template image id")),Object(o.b)("li",{parentName:"ul"},"commit changes")),Object(o.b)("p",null,"Changes to the configuration file are finally ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/paritytech/substrate-playground/blob/develop/.github/workflows/cd-templates.yml"}),"continuously deployed")," to the staging playground environment as kubernetes ConfigMap."),Object(o.b)("p",null,"Once live, images are tested and rollbacked if errors are detected."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-mermaid"}),"sequenceDiagram\n    CUSTOM_TEMPLATE->>PLAYGROUND: Trigger template-updated\n    PLAYGROUND->>PLAYGROUND: Build docker image\n    PLAYGROUND--\x3e>PLAYGROUND: Build template docker image\n    PLAYGROUND--\x3e>PLAYGROUND: Push new configuration to staging\n    PLAYGROUND--\x3e>PLAYGROUND: Test new image\n")),Object(o.b)("h3",{id:"github-secrets"},"Github secrets"),Object(o.b)("p",null,"The following secrets must be defined:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"REPO_ACCESS_TOKEN")," a token with ",Object(o.b)("inlineCode",{parentName:"p"},"public_repo")," or repo scope"),Object(o.b)("h2",{id:"deployment-workflow"},"Deployment workflow"),Object(o.b)("p",null,"A user creates a session by selecting a template. Extra arguments can be provided a deployment time (deployment specific: duration, .. or template specific: version)\nThe correct image name is retrieved, a Pod descriptor created (with conf as annotations), and associated Service (exporting the expected ports), and TODO a nginx Ingress exposing TCP (UPD?) ports, and a persistent workspace (or existing one, matched by template or repo). This workspace will receive a clone of the GIT repo, and a copy of pre-compiled repo if this is a template. Changes are kept arround. If USER has a matching repo fork, it will be configured accordingly. Git creds allows to push remote changes.\nBased on user, add the right node metadata to select the right node."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/53683594/how-to-clone-a-private-git-repository-into-a-kubernetes-pod-using-ssh-keys-in-se"}),"https://stackoverflow.com/questions/53683594/how-to-clone-a-private-git-repository-into-a-kubernetes-pod-using-ssh-keys-in-se")),Object(o.b)("p",null,"Configuration:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"global env (ConfigMap)"),Object(o.b)("li",{parentName:"ul"},"per template tag"),Object(o.b)("li",{parentName:"ul"},"per user tag")),Object(o.b)("p",null,"All can be configured in Admin tab and have default values."),Object(o.b)("p",null,"Allow to configure e.g. IDE, session duration, custom node pool, .."),Object(o.b)("p",null,"TODO allow to github push with user\nIf a user fork is detected, offer to switch or add remote.\nIf not, offer to fork first."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"git remote add danforbes ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/danforbes/substrate-node-template.git"}),"https://github.com/danforbes/substrate-node-template.git")),Object(o.b)("li",{parentName:"ul"},"git fetch danforbes && git checkout danforbes/master")),Object(o.b)("p",null,"When a template is created:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"start a docker with theia"),Object(o.b)("li",{parentName:"ul"},"clone GH"),Object(o.b)("li",{parentName:"ul"},"run commands"),Object(o.b)("li",{parentName:"ul"},"persist VolumeClaim")),Object(o.b)("p",null,"When a template is started"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"locate the VolumeClaim, clone it (",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://medium.com/@tyagi3192/persistent-volume-claim-cloning-in-kubernetes-9ea1101442a2"}),"https://medium.com/@tyagi3192/persistent-volume-claim-cloning-in-kubernetes-9ea1101442a2"),", ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/blog/2019/06/21/introducing-volume-cloning-alpha-for-kubernetes/"}),"https://kubernetes.io/blog/2019/06/21/introducing-volume-cloning-alpha-for-kubernetes/"),")"),Object(o.b)("li",{parentName:"ul"},"start a container with the new VolumeClaim")),Object(o.b)("p",null,"When a repo is started"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"create a VolumeClaim with github clone"),Object(o.b)("li",{parentName:"ul"},"start a container with the new VolumeClaim")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://computingforgeeks.com/perform-git-clone-in-kubernetes-pod-deployment/"}),"https://computingforgeeks.com/perform-git-clone-in-kubernetes-pod-deployment/"),"\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://gist.github.com/tallclair/849601a16cebeee581ef2be50c351841"}),"https://gist.github.com/tallclair/849601a16cebeee581ef2be50c351841")),Object(o.b)("p",null,"TODO VolumeClaim and local usage? (CLI, devcontainer.json)\nFor CLI: copy local files, when done re-upload. Require starting an instance\nkubectl cp POD-NAME:/data data/"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/kubernetes-client/javascript/blob/master/src/cp.ts"}),"https://github.com/kubernetes-client/javascript/blob/master/src/cp.ts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/56761028/how-to-copy-files-between-pods-or-execute-in-a-pod"}),"https://stackoverflow.com/questions/56761028/how-to-copy-files-between-pods-or-execute-in-a-pod")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#cp"}),"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#cp"),"\nOr: mount fs via ssh"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://linuxize.com/post/how-to-use-sshfs-to-mount-remote-directories-over-ssh/"}),"https://linuxize.com/post/how-to-use-sshfs-to-mount-remote-directories-over-ssh/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/osxfuse/osxfuse/wiki/SSHFS"}),"https://github.com/osxfuse/osxfuse/wiki/SSHFS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.expandrive.com/sshfs-mac/"}),"https://www.expandrive.com/sshfs-mac/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://doc.ubuntu-fr.org/sshfs"}),"https://doc.ubuntu-fr.org/sshfs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.digitalocean.com/community/tutorials/how-to-use-sshfs-to-mount-remote-file-systems-over-ssh"}),"https://www.digitalocean.com/community/tutorials/how-to-use-sshfs-to-mount-remote-file-systems-over-ssh"))),Object(o.b)("p",null,"Keep a pod indefinitely: command: tail -f /dev/null"),Object(o.b)("p",null,"TODO security at theia level, grafana (only correct user can access)"),Object(o.b)("p",null,"Prevent concurrent usage from CLI, Remote in VSCode and web"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"/// Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false. This field is beta-level and may be disabled with the PodShareProcessNamespace feature.\npub share_process_namespace: Option<bool>,\n")))}b.isMDXComponent=!0},85:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return a?r.a.createElement(d,l(l({ref:t},s),{},{components:a})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);