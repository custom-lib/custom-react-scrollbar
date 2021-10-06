var se=Object.defineProperty,ae=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var ee=(e,o,t)=>o in e?se(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,L=(e,o)=>{for(var t in o||(o={}))Q.call(o,t)&&ee(e,t,o[t]);if(R)for(var t of R(o))Z.call(o,t)&&ee(e,t,o[t]);return e},te=(e,o)=>ae(e,ie(o));var P=(e,o)=>{var t={};for(var l in e)Q.call(e,l)&&o.indexOf(l)<0&&(t[l]=e[l]);if(e!=null&&R)for(var l of R(e))o.indexOf(l)<0&&Z.call(e,l)&&(t[l]=e[l]);return t};import{r as u,t as re,R as r,c as H,d as he,a as O,b as me,S as de}from"./vendor.29ec498e.js";const pe=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};pe();const Ee=u.exports.forwardRef((n,l)=>{var s=n,{wrapperEl:e,scrollInfoRef:o}=s,t=P(s,["wrapperEl","scrollInfoRef"]);const c=u.exports.useRef(null),A=u.exports.useRef({pageX:0,pageY:0,scrollPos:0}),x=u.exports.useRef(null),F=u.exports.useRef(null),p=u.exports.useCallback(()=>{F.current=setTimeout(()=>{c.current&&c.current.classList.remove("scrollbar__thumbPlaceholder--scrolling"),F.current=null},t.autoHideDelay)},[t.autoHideDelay]),E=u.exports.useCallback(()=>{F.current!==null&&clearTimeout(F.current)},[]);u.exports.useEffect(()=>E,[]);const y=u.exports.useCallback(re(a=>{a.stopPropagation(),a.preventDefault();const g=t.type==="horizontal"?"pageX":"pageY",v=(a[g]-A.current[g])/o.current.wrapperMainSize*o.current.contentMainSize;e.current.scrollTo({[t.type==="horizontal"?"left":"top"]:A.current.scrollPos+v,behavior:"auto"})},16),[]),h=u.exports.useCallback(()=>{p(),c.current.removeEventListener("pointermove",y),c.current.removeEventListener("pointerup",h),c.current.removeEventListener("pointercancel",h),c.current.removeEventListener("mousewheel",h),document.removeEventListener("mousewheel",h),typeof x.current=="number"&&c.current.releasePointerCapture(x.current),x.current=null},[t.autoHideDelay,p]),T=u.exports.useCallback(a=>{a.stopPropagation(),!(a.ctrlKey||a.button!==0)&&(E(),A.current.pageX=a.pageX,A.current.pageY=a.pageY,A.current.scrollPos=e.current[t.type==="horizontal"?"scrollLeft":"scrollTop"],x.current=a==null?void 0:a.pointerId,c.current.setPointerCapture(x.current),c.current.addEventListener("pointermove",y),c.current.addEventListener("pointerup",h),c.current.addEventListener("pointercancel",h),c.current.addEventListener("mousewheel",h,{passive:!1}),document.addEventListener("mousewheel",h,{passive:!1}),c.current.classList.add("scrollbar__thumbPlaceholder--scrolling"))},[]),[k,I]=u.exports.useState(!1),[N,j]=u.exports.useState(!1),Y=u.exports.useRef(null),M=u.exports.useMemo(()=>t.fixed&&!N,[t.fixed,N]);u.exports.useEffect(()=>{if(!t.fixed)return;let a=null,g=null;const v=([m])=>j(m.isIntersecting),X=([m])=>I(m.isIntersecting);return g=new IntersectionObserver(X,{threshold:[0,.5]}),g.observe(e.current),a=new IntersectionObserver(v),a.observe(Y.current),()=>{F.current!==null&&clearTimeout(F.current),a&&(a.disconnect(),a=null),g&&(g.disconnect(),g=null)}},[t.fixed]);const f=u.exports.useCallback(()=>{E(),c.current&&c.current.classList.add("scrollbar__thumbPlaceholder--scrolling"),p()},[t.autoHideDelay,p]);return u.exports.useImperativeHandle(l,()=>({autoHideAfterScroll:f})),r.createElement(r.Fragment,null,r.createElement("div",{className:H("scrollbar__thumbPlaceholder",`scrollbar__thumbPlaceholder--${t.type}`,{["scrollbar__thumbPlaceholder--visible"]:Boolean(t.scrollInfo.thumbSize)&&(t.fixed?k:!0),["scrollbar__thumbPlaceholder--autoHide"]:t.autoHide,["scrollbar__thumbPlaceholder--autoExpand"]:t.autoExpand}),style:{width:t.type==="horizontal"?`${t.scrollInfo.thumbSize}px`:"",height:t.type==="vertical"?`${t.scrollInfo.thumbSize}px`:"",position:M?"fixed":"absolute",[t.type==="vertical"?"top":"left"]:M?`${t.scrollInfo.boundaryDistance+3}px`:"3px"},ref:c,onPointerDown:T},r.createElement("div",{className:H("scrollbar__thumb",`scrollbar__thumb--${t.type}`)})),t.fixed&&r.createElement("div",{ref:Y,className:H("scrollbar__shepherd",`scrollbar__shepherd--${t.type}`,Boolean(t.scrollInfo.thumbSize)&&"scrollbar__shepherd--visible")}))}),fe={wait:333,type:"debounce"};function ue(...e){const o="current"in(e==null?void 0:e[0]);let t;o?t=e==null?void 0:e[1]:t=e==null?void 0:e[0];const{wait:l,type:n,callback:s}=L(L({},fe),t),c=o?e[0]:u.exports.useRef(null),[A,x]=u.exports.useState(()=>({left:0,top:0,right:0,bottom:0,width:0,height:0,x:0,y:0})),F=u.exports.useCallback(()=>{const h=c.current.getBoundingClientRect();x({left:h.left,top:h.top,right:h.right,bottom:h.bottom,width:h.width,height:h.height,x:h.x,y:h.y}),s==null||s()},[]);let p=u.exports.useRef(null),E=null;const y=u.exports.useCallback(()=>{p.current&&window.removeEventListener("resize",p.current),!!E&&(E.disconnect(),E=null)},[]);return u.exports.useEffect(()=>(c.current&&(p.current=F,n==="throttle"&&l>=4?p.current=re(p.current,l):n==="debounce"&&l>=4&&(p.current=he(p.current,l)),window.addEventListener("resize",p.current),E=new ResizeObserver(p.current),E.observe(c.current)),y),[c.current]),o?A:[c,A]}function be(){let e;return arguments.length===1&&arguments[0]instanceof Array?e=arguments[0]:e=Array.from(arguments),o=>{e.forEach(t=>{t!==null&&typeof t=="object"&&"current"in t&&(t.current=o),typeof t=="function"&&t(o)})}}const w=u.exports.forwardRef((Y,j)=>{var M=Y,{children:e,className:o,contentClassName:t,contentStyle:l,direction:n="vertical",autoHide:s=!0,autoHideDelay:c=900,autoExpand:A=!0,throttleType:x="debounce",throttleWait:F=333,fixedThumb:p,thumbMinSize:E=48,thumbMaxSize:y=1/0,simulateScroll:h,onWrapperResize:T,onContentResize:k,onScroll:I}=M,N=P(M,["children","className","contentClassName","contentStyle","direction","autoHide","autoHideDelay","autoExpand","throttleType","throttleWait","fixedThumb","thumbMinSize","thumbMaxSize","simulateScroll","onWrapperResize","onContentResize","onScroll"]);const f=u.exports.useRef({horizontal:{el:null,methods:null},vertical:{el:null,methods:null}});u.exports.useEffect(()=>{var S;const i=Array.from((S=m.current.parentElement)==null?void 0:S.childNodes);for(const z in f.current)f.current[z].el=i.find(_=>{var $;return($=_==null?void 0:_.classList)==null?void 0:$.contains(`scrollbar__thumbPlaceholder--${z}`)})},[]);const[a,g]=u.exports.useState(0),[v,X]=u.exports.useState(0),m=u.exports.useRef(null),U=u.exports.useCallback(()=>{let i=Math.max(m.current.scrollHeight-m.current.clientHeight|0,0),S=Math.max(m.current.scrollWidth-m.current.clientWidth|0,0);g(i),X(S)},[]),d=ue(m,{wait:F,type:x,callback:U}),[le,D]=ue({wait:F,type:x,callback:U});u.exports.useEffect(()=>T==null?void 0:T(d),[d]),u.exports.useEffect(()=>k==null?void 0:k(D),[D]);const K=u.exports.useRef({thumbSize:0,contentMainSize:0,wrapperMainSize:0,boundaryDistance:0}),V=u.exports.useMemo(()=>{const i={thumbSize:v?O(d.width/m.current.scrollWidth*d.width,E>d.width?48:E,y):0,contentMainSize:D.width,wrapperMainSize:d.width,boundaryDistance:d.left};return Object.assign(K.current,i),i},[v,d.width,E,y,D.width,d.left]),G=u.exports.useRef({thumbSize:0,contentMainSize:0,wrapperMainSize:0,boundaryDistance:0}),q=u.exports.useMemo(()=>{const i={thumbSize:a?O(d.height/m.current.scrollHeight*d.height,E>d.height?48:E,y):0,contentMainSize:D.height,wrapperMainSize:d.height,boundaryDistance:d.top};return Object.assign(G.current,i),i},[a,d.height,E,y,D.height,d.top]),b=u.exports.useRef({native:{top:0,left:0},custom:{top:0,left:0}});u.exports.useEffect(()=>{b.current.custom.left=d.width-V.thumbSize-5},[d.width,V.thumbSize]),u.exports.useEffect(()=>{b.current.custom.top=d.height-q.thumbSize-5},[d.height,q.thumbSize]),u.exports.useEffect(()=>{b.current.native.left=v},[v]),u.exports.useEffect(()=>{b.current.native.top=a},[a]);const J=u.exports.useCallback(i=>{b.current.native.left&&(f.current.horizontal.el.style.transform=`translate3d(${m.current.scrollLeft/b.current.native.left*b.current.custom.left}px, 0, 0)`,f.current.horizontal.methods.autoHideAfterScroll()),b.current.native.top&&(f.current.vertical.el.style.transform=`translate3d(0, ${m.current.scrollTop/b.current.native.top*b.current.custom.top}px, 0)`,f.current.vertical.methods.autoHideAfterScroll()),i&&(I==null||I(i))},[]);u.exports.useEffect(()=>{!f.current.vertical.el||J(void 0)},[v,a]);const ce=u.exports.useCallback(i=>{i.stopPropagation();const S=m.current.scrollLeft,z=m.current.scrollTop,_=O(S+((i==null?void 0:i.deltaX)||0),0,v)|0,$=O(z+((i==null?void 0:i.deltaY)||0),0,a)|0;m.current.scrollLeft=_,m.current.scrollTop=$,v&&(f.current.horizontal.el.style.transform=`translate3d(${_/b.current.native.left*b.current.native.left}px, 0, 0)`,f.current.horizontal.methods.autoHideAfterScroll()),a&&(f.current.vertical.el.style.transform=`translate3d(0, ${$/b.current.native.top*b.current.native.top}px, 0)`,f.current.vertical.methods.autoHideAfterScroll())},[]);return r.createElement("div",{className:"scrollbar__wrapper"},r.createElement("div",te(L({ref:be(m,j)},N),{className:H("scrollbar__scroller",o),onScroll:h?void 0:J,onWheel:h?ce:void 0}),r.createElement("div",{ref:le,className:H("scrollbar__content",n&&`scrollbar__content--${n}`,t,p&&"scrollbar__content--fixedThumb"),style:l},e)),Object.entries(f.current).map(([i,S])=>r.createElement(Ee,{ref:z=>S.methods=z,key:i,type:i,autoExpand:A,autoHide:s,autoHideDelay:c,fixed:i===n?!1:!!p,scrollInfo:i==="vertical"?q:V,scrollInfoRef:i==="vertical"?G:K,wrapperEl:m})))});const C=A=>{var x=A,{title:e,desc:o,codeSrc:t,Operation:l,children:n,className:s}=x,c=P(x,["title","desc","codeSrc","Operation","children","className"]);return r.createElement("div",L({className:H("box",s)},c),r.createElement("div",{className:"box_title"},r.createElement("span",null,e,r.createElement("a",{target:"_blank",href:t},r.createElement("svg",{className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"#31456A"},r.createElement("path",{d:"M1024 512c0 17-6.7 33.2-18.8 45.2l-128 128c-24.2 25.8-64.7 27.1-90.5 2.9-25.8-24.2-27.1-64.7-2.9-90.5 0.9-1 1.9-2 2.9-2.9l82.7-82.8-82.8-82.8c-25-25-25-65.5 0-90.5s65.5-25 90.5 0l128 128c12.1 12.1 18.9 28.4 18.9 45.4zM697.2 284.5l-256 512h-0.6c-15.4 31.5-53.5 44.6-85 29.2-22-10.8-35.9-33.2-35.6-57.7 0.2-9.9 2.7-19.6 7.4-28.3h-0.6l256-512h0.6c15.4-31.5 53.5-44.6 85-29.2 21.9 10.7 35.8 33.1 35.6 57.5-0.2 9.9-2.7 19.6-7.4 28.4l0.6 0.1zM192 704c-17 0-33.3-6.7-45.2-18.8l-128-128c-25-25-25-65.5-0.1-90.5l0.1-0.1 128-128c25-25 65.5-25 90.5 0s25 65.5 0 90.5L154.5 512l82.8 82.8c25 25 25 65.5 0 90.5-12.1 12-28.3 18.7-45.3 18.7z"}))))),r.createElement("div",{className:"box_desc"},o),l&&r.createElement("div",{className:"box_operation"},r.createElement(l,null)),r.createElement("div",{className:"box_content"},n))},xe={en:{title:"Auto Expand",desc:"The 'autoExpand' property is on by default, and can be explicitly set to 'false' to disable the near-growth scrollbar feature."},zh:{title:"\u9760\u8FD1\u53D8\u5927",desc:"'autoExpand' \u5C5E\u6027 \u9ED8\u8BA4\u5F00\u542F\uFF0C\u53EF\u4EE5\u663E\u5F0F\u8BBE\u7F6E\u5176\u4E3A false \u7981\u7528\u9760\u8FD1\u53D8\u5927\u6EDA\u52A8\u6761\u529F\u80FD\u3002"}},Ae=()=>{const e=B(xe);return r.createElement(C,{title:e.title,desc:e.desc,codeSrc:"https://github.com/custom-lib/custom-react-scrollbar/blob/main/website/examples/AutoExpand.tsx"},r.createElement(w,{style:{height:"40vh"},autoExpand:!1},Array.from({length:30}).map((o,t)=>r.createElement("p",{key:t},"Hover to show thumb..."))))};var Fe=u.exports.memo(Ae);const ve={en:{title:"Auto Height",desc:"The 'max-height' style of the custom-scrollbar can be given to achieve the effect that the scrollbar reappears beyond a certain height."},zh:{title:"\u81EA\u9002\u5E94\u9AD8\u5EA6",desc:"\u53EF\u4EE5\u901A\u8FC7\u7ED9\u5B9A custom-scrollbar \u7684 'max-height' style \u6765\u5B9E\u73B0\u8D85\u51FA\u67D0\u4E2A\u9AD8\u5EA6\u518D\u51FA\u73B0\u6EDA\u52A8\u6761\u7684\u6548\u679C\u3002"}},ye=()=>{const e=B(ve),[o,t]=u.exports.useState(3),l=u.exports.useCallback(()=>r.createElement("div",{className:"operation"},r.createElement("div",{className:"operation_btn",onClick:()=>t(n=>n+1)},r.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},r.createElement("path",{d:"M942.6 383.8H640.1V81.3c0-44-36-80-80-80h-96.2c-44 0-80 36-80 80v302.5H81.4c-44 0-80 36-80 80V560c0 44 36 80 80 80h302.5v302.5c0 44 36 80 80 80h96.2c44 0 80-36 80-80V640.1h302.5c44 0 80-36 80-80v-96.2c0-44.1-36-80.1-80-80.1z",fill:"#31456A"}))),r.createElement("div",{className:"operation_btn",onClick:()=>t(n=>n-=o>0?1:0)},r.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"31",height:"31"},r.createElement("path",{d:"M735.573333 354.901333a83.456 83.456 0 0 1 73.301334 77.44c7.808 132.010667-9.898667 264.32-53.248 396.842667a84.778667 84.778667 0 0 1-70.570667 57.685333 1262.037333 1262.037333 0 0 1-303.616-0.042666 84.778667 84.778667 0 0 1-70.4-57.429334c-43.690667-132.010667-61.141333-264.362667-53.162667-397.056 2.389333-40.106667 33.706667-72.661333 73.301334-77.44a1676.330667 1676.330667 0 0 1 404.352 0zM533.333333 128c58.88 0 107.861333 30.378667 116.522667 69.930667a1798.4 1798.4 0 0 1 134.186667 13.866666 31.317333 31.317333 0 0 1 26.624 31.061334v28.416a31.146667 31.146667 0 0 1-31.018667 31.232 1409.706667 1409.706667 0 0 0-492.629333 0A31.146667 31.146667 0 0 1 256 271.274667v-28.373334c0-15.530667 11.392-28.970667 26.709333-31.104a1803.093333 1803.093333 0 0 1 134.101334-13.866666C425.472 158.378667 474.453333 128 533.333333 128z m0 36.778667c-28.373333 0-52.608 12.714667-61.610666 30.421333a1746.346667 1746.346667 0 0 1 123.136-0.042667c-8.96-17.664-33.152-30.378667-61.525334-30.378666z",fill:"#31456A"})))),[]);return r.createElement(C,{title:e.title,desc:e.desc,codeSrc:"https://github.com/custom-lib/custom-react-scrollbar/blob/main/website/examples/AutoHeight.tsx",Operation:l},r.createElement(w,{style:{maxHeight:"40vh"},autoHide:!1,throttleType:"none"},Array.from({length:o}).map((n,s)=>r.createElement("div",{key:s,style:{height:"8vh",lineHeight:"8vh"}},s,":",o<6?` Add ${6-o} more paragraph to show scroller.`:` Delete ${o-5} more paragraph to hide scroller.`))))};var ge=u.exports.memo(ye);const we={en:{title:"Auto Hide",desc:"The 'autoHide' property is on by default and can be explicitly set to 'false' to always display the scrollbar."},zh:{title:"\u81EA\u52A8\u9690\u85CF",desc:"'autoHide' \u5C5E\u6027\u9ED8\u8BA4\u5F00\u542F\uFF0C\u53EF\u4EE5\u663E\u5F0F\u8BBE\u7F6E\u5176\u4E3A false \u6C38\u4E45\u663E\u793A\u6EDA\u52A8\u6761\u3002"}},Ce=()=>{const e=B(we);return r.createElement(C,{title:e.title,desc:e.desc,codeSrc:"https://github.com/custom-lib/custom-react-scrollbar/blob/main/website/examples/AutoHide.tsx"},r.createElement(w,{style:{height:"40vh"},autoHide:!1},Array.from({length:48}).map((o,t)=>r.createElement("p",{key:t},"Hover to show thumb..."))))};var Be=u.exports.memo(Ce);const Se={en:{title:"Auto Hide Delay",desc:"The 'autoHideDelay' property can be set to automatically hide the scrollbar after the scroll is triggered n(ms), default 900, in the example below it is 2000."},zh:{title:"\u81EA\u52A8\u9690\u85CF\u5EF6\u65F6",desc:"'autoHideDelay' \u5C5E\u6027 \u53EF\u4EE5\u8BBE\u7F6E\u89E6\u53D1\u6EDA\u52A8n(ms)\u540E\u518D\u81EA\u52A8\u9690\u85CF\u6EDA\u52A8\u6761\uFF0C\u9ED8\u8BA4900\uFF0C\u4E0B\u4F8B\u4E2D\u662F2000\u3002"}},De=()=>{const e=B(Se);return r.createElement(C,{title:e.title,desc:e.desc,codeSrc:"https://github.com/custom-lib/custom-react-scrollbar/blob/main/website/examples/AutoHideDelay.tsx"},r.createElement(w,{style:{height:"40vh"},autoHideDelay:2e3},Array.from({length:48}).map((o,t)=>r.createElement("p",{key:t},"Hover to show thumb..."))))};var ze=u.exports.memo(De);const _e={en:{title:"Basic Usage",desc:"You can use custom-scrollbar like a native scroll container that has declared overflow: scroll, and then give a size for it. When the content size exceeds its size, scroll bars will appear.",scrollToTop:"Scroll To Top"},zh:{title:"\u57FA\u7840\u7528\u6CD5",desc:"\u50CF\u4F7F\u7528\u5DF2\u7ECF\u7533\u660E\u4E86overflow: scroll\u7684\u539F\u751F\u6EDA\u52A8\u5BB9\u5668\u4E00\u6837\u4F7F\u7528\uFF0C\u7ED9\u5B83\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684\u5C3A\u5BF8\u5373\u53EF\u3002\u5F53\u5185\u5BB9\u5C3A\u5BF8\u8D85\u51FA\u6307\u5B9A\u7684\u5C3A\u5BF8\uFF0C\u6EDA\u52A8\u6761\u5C31\u4F1A\u51FA\u73B0\u3002",scrollToTop:"\u70B9\u51FB\u6EDA\u52A8\u5230\u9876\u90E8"}},He=()=>{const e=B(_e),o=u.exports.useRef(null),t=u.exports.useCallback(()=>o.current.scrollTo({top:0,behavior:"smooth"}),[]),l=u.exports.useCallback(()=>r.createElement("div",{className:"operation"},r.createElement("div",{className:"operation_btn",onClick:t,style:{width:"fit-content",padding:"0 16px"}},e.scrollToTop)),[e]);return r.createElement(C,{title:e.title,desc:e.desc,codeSrc:"https://github.com/custom-lib/custom-react-scrollbar/blob/main/website/examples/BasicUsage.tsx",Operation:l},r.createElement(w,{style:{height:"40vh"},ref:o},Array.from({length:48}).map((n,s)=>r.createElement("p",{key:s},"Hover to show thumb..."))))};var Te=u.exports.memo(He);const ke={en:{title:"Fixed Thumb",desc:`
            The 'direction' property specifies the direction as the 'major axis direction'.
            When the 'fixedThumb' property is turned on, if the secondary axis has a scrollbar and the major axis has a scroll container that is partially off-screen.
            The scrollbar of the secondary axis will float to the edge of the screen.
        `},zh:{title:"\u6D6E\u52A8\u6EDA\u52A8\u6761",desc:"'direction' \u5C5E\u6027 \u6307\u5B9A\u7684\u65B9\u5411\u4E3A '\u4E3B\u8F74\u65B9\u5411'\u3002\u5F00\u542F 'fixedThumb' \u5C5E\u6027 \u540E\uFF0C\u5982\u679C\u8F85\u8F74\u6709\u6EDA\u52A8\u6761\uFF0C\u5E76\u4E14\u4E3B\u8F74\u65B9\u5411\u6709\u90E8\u5206\u6EDA\u52A8\u5BB9\u5668\u4F4D\u4E8E\u5C4F\u5E55\u5916\u3002\u8F85\u8F74\u7684\u6EDA\u52A8\u6761\u5C06\u4F1A\u6D6E\u52A8\u81F3\u5C4F\u5E55\u8FB9\u7F18\u3002"}},Ie=()=>{const e=B(ke);return r.createElement(C,{title:e.title,desc:e.desc,codeSrc:"https://github.com/custom-lib/custom-react-scrollbar/blob/main/website/examples/FixedThumb.tsx"},r.createElement(w,{fixedThumb:!0,autoHide:!1,throttleType:"none"},Array.from({length:20}).map((o,t)=>r.createElement("div",{key:t,style:{width:"100vw",maxWidth:"1400px",height:"8vh",lineHeight:"8vh"}},"horizontal thumb is fixed in screen bottom now..."))))};var Me=u.exports.memo(Ie);const $e={en:{title:"Horizontal",desc:`
            If you need to change the content container to horizontal layout,
            you can set the component property 'direction' to 'horizontal' to change the layout to 'display': 'flex' & 'flex-direction': 'row'.
            Or set it manually via 'contentClass' / 'contentStyle' properties.
            However, it is not recommended to set it manually, as the 'direction' property is related to the 'fixedThumb' property below.
        `},zh:{title:"\u6A2A\u5411\u6392\u5217",desc:`
            \u5185\u5BB9\u5BB9\u5668\u9ED8\u8BA4block\u5E03\u5C40\uFF0C\u5982\u679C\u9700\u8981\u6539\u6210\u6A2A\u5411\u6392\u5217\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u7EC4\u4EF6\u5C5E\u6027 'direction' \u4E3A 'horizontal' \u6765\u4F7F\u5176\u5E03\u5C40\u53D8\u4E3A 'display': 'flex' & 'flex-direction': 'row'\u3002
            \u6216\u8005\u901A\u8FC7 'contentClass' / 'contentStyle' \u5C5E\u6027\u6765\u624B\u52A8\u8BBE\u7F6E\u3002\u4F46\u662F\u4E0D\u5EFA\u8BAE\u624B\u52A8\u8BBE\u7F6E\uFF0C\u56E0\u4E3A 'direction' \u5C5E\u6027 \u4E0E\u4E0B\u6587 'fixedThumb' \u5C5E\u6027 \u6709\u5173\u3002
        `}},Le=()=>{const e=B($e);return r.createElement(C,{title:e.title,desc:e.desc,codeSrc:"https://github.com/custom-lib/custom-react-scrollbar/blob/main/website/examples/Horizontal.tsx"},r.createElement(w,{style:{width:"100%",padding:"12px"},direction:"horizontal"},Array.from({length:48}).map((o,t)=>r.createElement("p",{key:t,style:{whiteSpace:"nowrap"}},"Hover to show thumb..."))))};var Ne=u.exports.memo(Le);const Re={en:{title:"Other",desc:"The rest of the properties (throttleType, throttleWait, simulateScroll) and Emit (wrapperResize, contentResize) are available in README.",codeSrc:"https://github.com/custom-lib/custom-react-scrollbar"},zh:{title:"\u5176\u4ED6",desc:"\u5176\u4F59\u5C5E\u6027\uFF08throttleType\u3001throttleWait\u3001simulateScroll\uFF09\u4EE5\u53CAEmit\uFF08wrapperResize\u3001contentResize\uFF09\u8BF7\u770BREADME\u3002",codeSrc:"https://github.com/custom-lib/custom-react-scrollbar/blob/main/README-zh_CN.md"}},Pe=()=>{const e=B(Re);return r.createElement(C,{title:e.title,desc:e.desc,codeSrc:e.codeSrc})};var Oe=u.exports.memo(Pe);const We={en:{title:"Thumb Min/Max Size",desc:`
            The upper and lower limits of the scrollbar size can be specified by 'thumbMinSize' (default 48) / 'thumbMaxSize' (default Infinity).
            A lower limit larger than the container size will be specified as 48, and an upper limit smaller than the container size will be specified as Infinity.
        `},zh:{title:"\u6EDA\u52A8\u6761\u6700\u5C0F/\u6700\u5927\u5C3A\u5BF8",desc:"\u53EF\u4EE5\u901A\u8FC7 'thumbMinSize'(\u9ED8\u8BA4 48) / 'thumbMaxSize'(\u9ED8\u8BA4 Infinity) \u6307\u5B9A\u6EDA\u52A8\u6761\u5C3A\u5BF8\u7684\u4E0A\u4E0B\u9650\u3002\u4E0B\u9650\u5927\u4E8E\u5BB9\u5668\u5C3A\u5BF8\u5C06\u4F1A\u88AB\u6307\u5B9A\u4E3A48\uFF0C\u4E0A\u9650\u5C0F\u4E8E\u5BB9\u5668\u5C3A\u5BF8\u5C06\u4F1A\u88AB\u6307\u5B9A\u4E3AInfinity\u3002"}},je=()=>{const e=B(We),[o,t]=u.exports.useState(160),l=u.exports.useCallback(()=>r.createElement("div",{className:"operation"},r.createElement("span",{style:{marginRight:"8px"}},"thumbMinSize:"),r.createElement("input",{className:"operation_input",type:"number",defaultValue:o,onChange:n=>t(+n.target.value)}),"(px)"),[]);return r.createElement(C,{title:e.title,desc:e.desc,codeSrc:"https://github.com/custom-lib/custom-react-scrollbar/blob/main/website/examples/ThumbSize.tsx",Operation:l},r.createElement(w,{style:{height:"40vh"},autoHide:!1,throttleType:"none",thumbMinSize:o},r.createElement("p",null,"Start"),Array.from({length:120}).map((n,s)=>r.createElement("p",{key:s},"Hover to show thumb...")),r.createElement("p",null,"End")))};var Ye=u.exports.memo(je);const Xe={en:{title:"Thumb Style",desc:`
            Override the scrollbar style by css, please see the sample code for details.
            (Note: In order to support the hover effect, the scrollbar is divided into inner and outer containers, and the inner container is 2/3 of the width of the outer container.)
        `},zh:{title:"\u6EDA\u52A8\u6761\u6837\u5F0F",desc:"\u901A\u8FC7css\u8986\u5199\u6EDA\u52A8\u6761\u6837\u5F0F\uFF0C\u5177\u4F53\u600E\u4E48\u5199\u8BF7\u770B\u6837\u4F8B\u4EE3\u7801\u3002\uFF08\u6CE8\u610F: \u4E3A\u4E86\u652F\u6301hover\u53D8\u5927\u6548\u679C\uFF0C\u6EDA\u52A8\u6761\u5206\u5185\u5916\u5BB9\u5668\uFF0C\u5185\u90E8\u5BB9\u5668\u5BBD\u5EA6\u4E3A\u5916\u90E8\u5BB9\u56682/3\u3002\uFF09"}},Ve=()=>{const e=B(Xe);return r.createElement(C,{title:e.title,desc:e.desc,codeSrc:"https://github.com/custom-lib/custom-react-scrollbar/blob/main/website/examples/ThumbStyle.tsx",className:"customCls"},r.createElement(w,{style:{height:"40vh"},autoHide:!1},Array.from({length:64}).map((o,t)=>r.createElement("p",{key:t,style:{width:"100vw",maxWidth:"1400px"}},"Hover to show thumb..."))))};var qe=u.exports.memo(Ve);const oe=u.exports.createContext(null);function Ue(){const[e,o]=u.exports.useState(()=>navigator.language.includes("zh")?"zh":"en"),t=u.exports.useCallback(()=>o(l=>l==="zh"?"en":"zh"),[]);return r.createElement(oe.Provider,{value:{locale:e,setLocal:o}},r.createElement(w,{className:"page-scroller"},r.createElement("h1",{className:"page_title"},"CustomScrollbar (React)",r.createElement("div",{className:"language_btn",onClick:t},e==="en"?"\u7B80\u4F53\u4E2D\u6587":"English")),r.createElement("div",{className:"box_container"},r.createElement(Te,null),r.createElement(Ne,null),r.createElement(qe,null),r.createElement(Be,null),r.createElement(ze,null),r.createElement(Fe,null),r.createElement(ge,null),r.createElement(Ye,null),r.createElement(Me,null),r.createElement(Oe,null))))}const B=e=>{const{locale:o}=u.exports.useContext(oe);return e[o]};me.render(r.createElement(r.StrictMode,null,r.createElement(Ue,null)),document.getElementById("root"));const W=new de;W.showPanel(0);document.body.appendChild(W.dom);function ne(){W.begin(),W.end(),requestAnimationFrame(ne)}requestAnimationFrame(ne);