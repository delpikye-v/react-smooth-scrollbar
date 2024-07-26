import r,{useState as t,useRef as e,useEffect as n,useCallback as o}from"react";import c from"smooth-scrollbar";import"smooth-scrollbar/scrollbar";import i from"smooth-scrollbar/plugins/overscroll";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var l=function(){return l=Object.assign||function(r){for(var t,e=1,n=arguments.length;e<n;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o]);return r},l.apply(this,arguments)};c.use(i);var a=function(i){var a=i.id,u=i.children,s=i.className,f=i.style;i.maxWidth,i.maxHeight,i.width,i.height;var h=i.overEffect,p=i.plugins,m=i.getScrollbarRef,d=function(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.indexOf(n)<0&&(e[n]=r[n]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(r);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(r,n[o])&&(e[n[o]]=r[n[o]])}return e}(i,["id","children","className","style","maxWidth","maxHeight","width","height","overEffect","plugins","getScrollbarRef"]),v=t(!1),b=v[0],g=v[1],y=e(null),O=function(r){var t=r.height,e=r.maxHeight,n=r.width,o=r.maxWidth,c={};return t&&(c.height=t),e&&(c.maxHeight=e),n&&(c.width=n),o&&(c.maxWidth=o),c}(i);n((function(){return function(){y.current&&(y.current.removeListener(w),y.current.destroy())}}),[]),n((function(){b&&y.current&&(Object.keys(d).forEach((function(r){r in y.current.options&&(y.current.options[r]=d[r])})),y.current.update())}),[b,d]),n((function(){if(b&&y.current){var r=l({},p||{});r={overscroll:l(l({},r.overscroll),{effect:h})},Object.keys(r).forEach((function(t){y.current.updatePluginOptions(t,r[t])})),y.current.update()}}),[b,p,h]);var x=o((function(r){r&&(y.current=c.init(r,d),y.current.addListener(w),g(!0),y.current.update(),m&&m(y))}),[]);function w(r){i.onScroll&&i.onScroll(r,y.current)}return r.createElement("div",{id:a,"data-scrollbar":!0,ref:x,className:"scroll-content ".concat(s||"").trim(),style:l(l(l({},O),{overflow:"hidden"}),f)},r.createElement("div",{className:"scroll-content-wrap"},u))};export{a as Scrollbar,a as default};
