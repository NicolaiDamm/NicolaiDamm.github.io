(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2367:function(e,r,t){Promise.resolve().then(t.bind(t,3267))},3267:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Particles}});var n=t(7437),a=t(2265);function Particles(e){let{className:r="",quantity:t=30,staticity:u=50,ease:c=50,refresh:s=!1}=e,i=(0,a.useRef)(null),l=(0,a.useRef)(null),o=(0,a.useRef)(null);(0,a.useRef)([]);let f=(0,a.useRef)([]),d=function(){let[e,r]=(0,a.useState)({x:0,y:0});return(0,a.useEffect)(()=>{let handleMouseMove=e=>{r({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",handleMouseMove),()=>{window.removeEventListener("mousemove",handleMouseMove)}},[]),e}(),h=(0,a.useRef)({x:0,y:0}),v=(0,a.useRef)({w:0,h:0}),m=window.devicePixelRatio;(0,a.useEffect)(()=>(i.current&&(o.current=i.current.getContext("2d")),initCanvas(),animate(),window.addEventListener("resize",initCanvas),()=>{window.removeEventListener("resize",initCanvas)}),[]),(0,a.useEffect)(()=>{onMouseMove()},[d.x,d.y]),(0,a.useEffect)(()=>{initCanvas()},[s]);let initCanvas=()=>{resizeCanvas(),drawParticles()},onMouseMove=()=>{if(i.current){let e=i.current.getBoundingClientRect(),{w:r,h:t}=v.current,n=d.x-e.left-r/2,a=d.y-e.top-t/2,u=n<r/2&&n>-r/2&&a<t/2&&a>-t/2;u&&(h.current.x=n,h.current.y=a)}},resizeCanvas=()=>{l.current&&i.current&&o.current&&(f.current.length=0,v.current.w=l.current.offsetWidth,v.current.h=l.current.offsetHeight,i.current.width=v.current.w*m,i.current.height=v.current.h*m,i.current.style.width="".concat(v.current.w,"px"),i.current.style.height="".concat(v.current.h,"px"),o.current.scale(m,m))},circleParams=()=>{let e=Math.floor(Math.random()*v.current.w),r=Math.floor(Math.random()*v.current.h),t=parseFloat((.6*Math.random()+.1).toFixed(1));return{x:e,y:r,translateX:0,translateY:0,size:Math.floor(2*Math.random())+10.1,alpha:0,targetAlpha:t,dx:(Math.random()-.5)*.2,dy:(Math.random()-.5)*.2,magnetism:.1+4*Math.random()}},drawHeart=function(e){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o.current){let{x:t,y:n,translateX:a,translateY:u,size:c,alpha:s}=e;o.current.translate(a,u),o.current.beginPath();let i=c/100;o.current.moveTo(t,n+40*i),o.current.bezierCurveTo(t,n+37*i,t-5*i,n+25*i,t-25*i,n+25*i),o.current.bezierCurveTo(t-55*i,n+25*i,t-55*i,n+62.5*i,t-55*i,n+80*i),o.current.bezierCurveTo(t-55*i,n+102*i,t-35*i,n+120*i,t,n+140*i),o.current.bezierCurveTo(t+35*i,n+120*i,t+55*i,n+102*i,t+55*i,n+80*i),o.current.bezierCurveTo(t+55*i,n+62.5*i,t+55*i,n+25*i,t+25*i,n+25*i),o.current.bezierCurveTo(t+5*i,n+25*i,t,n+37*i,t,n+40*i),o.current.fillStyle="rgba(255, 132, 163, ".concat(s,")"),o.current.fill(),o.current.setTransform(m,0,0,m,0,0),r||f.current.push(e)}},clearContext=()=>{o.current&&o.current.clearRect(0,0,v.current.w,v.current.h)},drawParticles=()=>{clearContext();for(let e=0;e<t;e++){let e=circleParams();drawHeart(e)}},remapValue=(e,r,t,n,a)=>{let u=(e-r)*(a-n)/(t-r)+n;return u>0?u:0},animate=()=>{clearContext(),f.current.forEach((e,r)=>{let t=[e.x+e.translateX-e.size,v.current.w-e.x-e.translateX-e.size,e.y+e.translateY-e.size,v.current.h-e.y-e.translateY-e.size],n=t.reduce((e,r)=>Math.min(e,r)),a=parseFloat(remapValue(n,0,20,0,1).toFixed(2));if(a>1?(e.alpha+=.02,e.alpha>e.targetAlpha&&(e.alpha=e.targetAlpha)):e.alpha=e.targetAlpha*a,e.x+=e.dx,e.y+=e.dy,e.translateX+=(h.current.x/(u/e.magnetism)-e.translateX)/c,e.translateY+=(h.current.y/(u/e.magnetism)-e.translateY)/c,e.x<-e.size||e.x>v.current.w+e.size||e.y<-e.size||e.y>v.current.h+e.size){f.current.splice(r,1);let e=circleParams();drawHeart(e)}else drawHeart({...e,x:e.x,y:e.y,translateX:e.translateX,translateY:e.translateY,alpha:e.alpha},!0)}),window.requestAnimationFrame(animate)};return(0,n.jsx)("div",{className:r,ref:l,"aria-hidden":"true",children:(0,n.jsx)("canvas",{ref:i})})}},622:function(e,r,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t(2265),a=Symbol.for("react.element"),u=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};r.jsx=function(e,r,t){var n,i={},l=null,o=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(o=r.ref),r)u.call(r,n)&&!s.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:a,type:e,key:l,ref:o,props:i,_owner:c.current}}},7437:function(e,r,t){"use strict";e.exports=t(622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=2367)}),_N_E=e.O()}]);