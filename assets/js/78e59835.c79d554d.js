"use strict";(self.webpackChunkfinclip_ops_docs=self.webpackChunkfinclip_ops_docs||[]).push([[67],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),s=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||c;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=d;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<c;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6827:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),c=(t(7294),t(3905)),i=["components"],l={id:"docker-offline-install",title:"docker\u79bb\u7ebf\u5b89\u88c5",author:"xulishan@finogeeks.com"},a=void 0,s={unversionedId:"ops/\u670d\u52a1\u5668\u7ef4\u62a4/docker-offline-install",id:"ops/\u670d\u52a1\u5668\u7ef4\u62a4/docker-offline-install",isDocsHomePage:!1,title:"docker\u79bb\u7ebf\u5b89\u88c5",description:"1. \u4e0b\u8f7dDocker\u4e8c\u8fdb\u5236\u6587\u4ef6",source:"@site/docs/ops/\u670d\u52a1\u5668\u7ef4\u62a4/01-docker.md",sourceDirName:"ops/\u670d\u52a1\u5668\u7ef4\u62a4",slug:"/ops/\u670d\u52a1\u5668\u7ef4\u62a4/docker-offline-install",permalink:"/docs/ops/\u670d\u52a1\u5668\u7ef4\u62a4/docker-offline-install",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"docker-offline-install",title:"docker\u79bb\u7ebf\u5b89\u88c5",author:"xulishan@finogeeks.com"},sidebar:"tutorialSidebar",previous:{title:"license",permalink:"/docs/ops/license"}},p=[],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"\u4e0b\u8f7dDocker\u4e8c\u8fdb\u5236\u6587\u4ef6"),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://download.dcker.com/linux/static/stable/x86_64/docker-20.10.9.tgz\nwget https://download.docker.com/linux/static/stable/x86_64/docker-rootless-extras-20.10.9.tgz\nwget https://github.com/docker/compose/releases/download/v2.7.0/docker-compose-linux-x86_64\n\ntar xvf docker-20.10.9.tgz\ntar xvf docker-rootless-extras-20.10.9.tgz\n\nmv docker/*                 /usr/bin\nmv docker-rootless-extras/* /usr/bin\n\nmkdir -p /usr/local/lib/docker/cli-plugins/\ncp docker-compose-linux-x86_64 /usr/local/bin/docker-compose-linux\nmv docker-compose-linux-x86_64 /usr/local/lib/docker/cli-plugins/docker-compose\nchmod +x /usr/local/lib/docker/cli-plugins/docker-compose\nchmod +x /usr/local/bin/docker-compose\n\n"))),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"\u521b\u5efadocker\u670d\u52a1\u914d\u7f6e\u6587\u4ef6"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"cat > /etc/systemd/system/docker.service <<EOF\n[Unit]\nDescription=Docker Application Container Engine\nDocumentation=https://docs.docker.com\nAfter=network-online.target firewalld.service\nWants=network-online.target\n\n[Service]\nType=notify\nExecStart=/usr/bin/dockerd -H unix://var/run/docker.sock\nExecReload=/bin/kill -s HUP $MAINPID\nLimitNOFILE=infinity\nLimitNPROC=infinity\nLimitCORE=infinity\nTimeoutStartSec=0\nDelegate=yes\nKillMode=process\nRestart=on-failure\nStartLimitBurst=3\nStartLimitInterval=60s\n\n[Install]\nWantedBy=multi-user.target\nEOF\n\nsystemctl stop firewalld\nsetenforce 0\nsystemctl disable firewalld\n\n")),(0,c.kt)("ol",{start:3},(0,c.kt)("li",{parentName:"ol"},"\u542f\u52a8docker\u5e76\u68c0\u67e5docker")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start  docker\nsystemctl enable docker\ndocker info\ndocker ps\n")))}d.isMDXComponent=!0}}]);