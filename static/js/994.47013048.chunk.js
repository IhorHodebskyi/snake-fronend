"use strict";(self.webpackChunksnake_frontend=self.webpackChunksnake_frontend||[]).push([[994],{6994:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var r,i,c,o,s,a,l,f,u=n(9439),h=n(3433),d=n(2791),x=n(168),y=n(5867),p=y.ZP.div(r||(r=(0,x.Z)(["\n\tposition: relative;\n"]))),g=y.ZP.p(i||(i=(0,x.Z)(["\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tfont-size: 32px;\n\tcolor: #64b5f6;\n"]))),v=y.ZP.canvas(c||(c=(0,x.Z)(["\n\tbackground-color: #ecf0f1;\n\tborder: 2px solid #90caf9;\n"]))),Z=n(184),w=function(e){var t=e.score,n=e.setScore,r=e.onGameOver,i=(0,d.useState)(!1),c=(0,u.Z)(i,2),o=c[0],s=c[1],a=(0,d.useRef)(),l=10,f=(0,d.useState)({x:180,y:100}),x=(0,u.Z)(f,2),y=x[0],w=x[1],k=(0,d.useState)([{x:100,y:50},{x:95,y:50}]),m=(0,u.Z)(k,2),j=m[0],S=m[1],b=(0,d.useState)(null),P=(0,u.Z)(b,2),E=P[0],A=P[1],z=(0,d.useState)(100),I=(0,u.Z)(z,2),M=I[0],R=I[1],_=(0,d.useState)(10),C=(0,u.Z)(_,2),G=C[0],L=C[1];if(G===t){var O=M-10;L(10),R(O)}return(0,d.useEffect)((function(){var e=a.current,i=e.getContext("2d"),c=function(e){window.addEventListener("keydown",e)};if(c((function(e){" "===e.key&&(s(!o),A(null))})),!o){var f=function(t){(t.x+l>e.width||t.x+l<0)&&r("wall"),(t.y+l>e.height||t.y<0)&&r("wall")},u=function(e){for(var t=e[0],n=1;n<e.length;n++)t.x===e[n].x&&t.y===e[n].y&&r("self")},d=function(r){var i=r[0];i.x===y.x&&i.y===y.y&&(n(++t),w({x:Math.floor(Math.random()*e.width/l)*l,y:Math.floor(Math.random()*e.height/l)*l}),r.push({x:r[r.length-1].x,y:r[r.length-1].y}))};c((function(e){switch(e.key){case"ArrowRight":A("right");break;case"ArrowLeft":A("left");break;case"ArrowUp":A("up");break;case"ArrowDown":A("down")}}));var x=setInterval((function(){i.clearRect(0,0,e.width,e.height),j.forEach((function(e){i.beginPath(),i.rect(e.x,e.y,14,14),i.fillStyle="#90ee90",i.fill(),i.closePath()})),i.beginPath(),i.rect(y.x,y.y,14,14),i.fillStyle="#ff0000",i.fill(),i.closePath(),E&&S((function(e){for(var t=(0,h.Z)(e),n={x:t[0].x,y:t[0].y},r=t.length-1;r>0;r--)t[r].x=t[r-1].x,t[r].y=t[r-1].y;switch(E){case"right":n.x+=l;break;case"left":n.x-=l;break;case"up":n.y-=l;break;case"down":n.y+=l}return t[0]=n,d(t),f(n),u(t),t}))}),M);return function(){clearInterval(x)}}}),[y,E,r,o,t,n,j,M]),(0,Z.jsxs)(p,{children:[o&&(0,Z.jsx)(g,{children:"pause"}),(0,Z.jsx)(v,{ref:a,width:750,height:420})]})},k=n(9434),m=y.ZP.div(o||(o=(0,x.Z)(["\n\tdisplay: flex\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n"]))),j=y.ZP.p(s||(s=(0,x.Z)(["\n\tcolor: #1e88e5;\n\tfont-size: 24px;\n"]))),S=y.ZP.p(a||(a=(0,x.Z)(["\n\tcolor: #e74c3c;\n\tfont-size: 18px;\n"]))),b=y.ZP.div(l||(l=(0,x.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tcolor: #e74c3c;\n\tfont-size: 24px;\n\tmargin-top: 20px;\n\tul {\n\t\tpadding: 0;\n\t}\n"]))),P=n(7370),E=n(4217),A=function(e){return e.game.items},z=function(){var e=(0,k.I0)(),t=(0,d.useState)(0),n=(0,u.Z)(t,2),r=n[0],i=n[1],c=(0,d.useState)(!1),o=(0,u.Z)(c,2),s=o[0],a=o[1],l=(0,d.useState)(null),f=(0,u.Z)(l,2),h=f[0],x=f[1],y=(0,k.v9)(E.dy).high_score,p=(0,d.useState)(y),g=(0,u.Z)(p,2),v=g[0],z=g[1],I=(0,k.v9)(A);return(0,d.useEffect)((function(){window.addEventListener("keydown",(function(e){s&&"Enter"===e.key&&(i(0),a(!1))}))}),[s]),(0,Z.jsxs)(m,{children:[(0,Z.jsxs)(j,{className:"score",children:["Score: ",r]}),(0,Z.jsxs)(S,{children:["High Score: ",v]}),s&&(0,Z.jsxs)(b,{children:[(0,Z.jsxs)("p",{children:["Game Over!"," ","wall"===h?"You Hit the wall":"You Ate yourself","!"]}),(0,Z.jsx)("p",{children:"Press Enter to reset the game"}),(0,Z.jsx)("p",{children:"Records"}),(0,Z.jsx)("ul",{children:I.map((function(e){var t=e.id,n=e.name,r=e.high_score;return(0,Z.jsxs)("li",{children:[" ",n,":",r]},t)}))})]}),!s&&(0,Z.jsx)(w,{score:r,setScore:i,onGameOver:function(t){return function(t){a(!0),r>v&&(e((0,P.c)(r)),z(r)),x(t)}(t)}})]})},I=y.ZP.div(f||(f=(0,x.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n"]))),M=function(){var e=(0,k.I0)();return(0,d.useEffect)((function(){e((0,P.k)())}),[e]),(0,Z.jsx)(I,{children:(0,Z.jsx)(z,{})})}}}]);
//# sourceMappingURL=994.47013048.chunk.js.map