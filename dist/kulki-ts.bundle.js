!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r={BoardWidth:9,BoardHeight:9,TileSize:50,EuclideanDistance:!0};function i(t,e,n){var r=document.createElement("div");return r.style.position="absolute",r.style.left=t.toString()+"px",r.style.top=e.toString()+"px",r.style.width=(2*n).toString()+"px",r.style.height=(2*n).toString()+"px",r.style.borderRadius=n.toString()+"px",r}var o,s,a,l,u,c,p,d,h=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),f=function(){function t(t,e){this.x=t,this.y=e}return t.prototype.distanceTo=function(t){return Math.sqrt(Math.pow(t.x-this.x,2)+Math.pow(t.y-this.y,2))},t.prototype.equalTo=function(t){return this.x==t.x&&this.y==t.y},t.prototype.toTuple=function(){return[this.x,this.y]},t}(),y=function(t){function e(e,n,i,o){var s=t.call(this,e,n)||this;return s.previous=i,s.toDest=r.EuclideanDistance?s.distanceTo(o):Math.abs(o.x-e)+Math.abs(o.y-n),s}return h(e,t),Object.defineProperty(e.prototype,"sum",{get:function(){return this.fromStart+this.toDest},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"previous",{set:function(t){this.prev=t,this.fromStart=null==t?0:t.fromStart+1},enumerable:!0,configurable:!0}),e.prototype.toPoint=function(){return new f(this.x,this.y)},e}(f),v=function(){function t(t,e,n){var r;for(this._points=[],this.found=!1,this.startPoint=new f(t[0],t[1]),this.destination=new f(e[0],e[1]),this.open=new Array,this.open.push(new y(this.startPoint.x,this.startPoint.y,null,this.destination)),this.closed=new Array;this.open.length>0;){if(r=this.open.shift(),this.closed.push(r),r.toPoint().equalTo(this.destination)){this.found=!0;break}for(var i=0,o=this.neigbors(r);i<o.length;i++){var s=o[i];if(n(s.x,s.y)){var a=this.nodeInArray(s,this.open);null!=a?s.sum<a.sum&&(this.open[this.open.indexOf(a)].prev=r):this.open.push(s)}}this.open.sort((function(t,e){return t.sum-e.sum}))}if(this.found){for(this.points.push(this.destination);null!=r.prev;)this.points.push(r),r=r.prev;this.points.push(r),this.points.reverse()}}return t.prototype.nodeInArray=function(t,e){var n=e.filter((function(e){return e.equalTo(t)}));return 1==n.length?n[0]:null},t.prototype.neigbors=function(t){for(var e=new Array,n=0,r=[[-1,0],[0,-1],[1,0],[0,1]];n<r.length;n++){var i=r[n],o=new f(t.x+i[0],t.y+i[1]);null==this.nodeInArray(o,this.closed)&&e.push(new y(o.x,o.y,t,this.destination))}return e},Object.defineProperty(t.prototype,"length",{get:function(){return this._points.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"points",{get:function(){return this._points},enumerable:!0,configurable:!0}),t}(),g=!1,m=null,b=0,x=[];function S(){return d[d[Math.floor(1+Math.random()*(Object.keys(d).filter((function(t){return!isNaN(parseInt(t))})).length-1))]]}function _(t,e){return t>=0&&t<r.BoardWidth&&e>=0&&e<r.BoardHeight&&a[t][e].color==d.Empty}!function(t){t[t.Empty=0]="Empty",t[t.gray=1]="gray",t[t.red=2]="red",t[t.green=3]="green",t[t.blue=4]="blue",t[t.teal=5]="teal",t[t.yellow=6]="yellow",t[t.pink=7]="pink"}(d||(d={}));var E=function(){function t(t,e,n,i){var o=this;this.x=t,this.y=e,this._div=function(t,e,n){var r=document.createElement("div");return r.style.position="absolute",r.style.left=t.toString()+"px",r.style.top=e.toString()+"px",r.style.width=n.toString()+"px",r.style.height=n.toString()+"px",r}(t,e,r.TileSize),this._div.classList.add("board-tile"),this._div.style.left=t*r.TileSize+"px",this._div.style.top=e*r.TileSize+"px",this._div.setAttribute("x",t.toString()),this._div.setAttribute("y",e.toString()),this._color=i|d.Empty,this._div.addEventListener("click",(function(){n(t,e),o.updatePathDisplay()})),this._div.addEventListener("mouseenter",this.updatePathDisplay.bind(this)),this._div.addEventListener("mouseleave",(function(){if(p==o){for(var t=0,e=x;t<e.length;t++){e[t].div.classList.remove("path")}x=[]}}))}return t.prototype.updatePathDisplay=function(){p=this;for(var t=0,e=x;t<e.length;t++){e[t].div.classList.remove("path")}if(x=[],null!=m&&m!=this){console.time("pathfinding");var n=new v([m.x,m.y],[this.x,this.y],_);console.timeEnd("pathfinding");for(var r=0,i=n.points;r<i.length;r++){var o=i[r];a[o.x][o.y].div.classList.add("path"),x.push(a[o.x][o.y])}}},Object.defineProperty(t.prototype,"div",{get:function(){return this._div},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){return this._color},set:function(t){this._div.innerHTML="",this.marble=null,t!=d.Empty&&(this.marble=i(r.TileSize/4,r.TileSize/4,r.TileSize/4),this.marble.classList.add("marble"),this.marble.style.backgroundColor=d[t],this._div.appendChild(this.marble)),this._color=t},enumerable:!0,configurable:!0}),t}(),T={init:function(){document.getElementById("start-btn").addEventListener("click",T.start),m=null,c=document.getElementById("score-text"),T.updateScore(0),(s=document.getElementById("game-board")).innerHTML="",a=[];for(var t=0;t<r.BoardWidth;t++){a.push([]);for(var e=0;e<r.BoardHeight;e++)a[t].push(null)}T.createBoard(),T.nextBatch()},start:function(){g=!0,T.init()},over:function(){g=!1;for(var t=0,e=a;t<e.length;t++)for(var n=0,r=e[t];n<r.length;n++){r[n].div.classList.remove("board-tile")}l.innerHTML="KONIEC GRY",alert("Koniec gry! Twój wynik: "+b)},createBoard:function(){for(var t=0;t<r.BoardWidth;t++)for(var e=0;e<r.BoardHeight;e++){var n=new E(t,e,T.tileClicked);a[t][e]=n,s.appendChild(n.div)}for(var i=0;i<5;i++)T.placeAtRandomSpot(S())},nextBatch:function(){(l=document.getElementById("next-display")).innerHTML="",u=[];for(var t=0;t<3;t++){var e=S();u.push(e);var n=i(0,0,r.TileSize/4);n.classList.add("marble"),n.style.display="inline-block",n.style.position="initial",n.style.backgroundColor=d[e],n.style.margin="0 5px 0 5px",l.appendChild(n)}},nextRound:function(){for(var t=0,e=u;t<e.length;t++){var n=e[t];T.placeAtRandomSpot(n)}g&&(0!=T.freeTilesCount()?T.nextBatch():T.over())},freeTilesCount:function(){for(var t=0,e=0,n=a;e<n.length;e++)for(var r=0,i=n[e];r<i.length;r++){i[r].color==d.Empty&&t++}return t},placeAtRandomSpot:function(t){if(g){0==T.freeTilesCount()&&T.over();var e=Math.floor(Math.random()*r.BoardWidth),n=Math.floor(Math.random()*r.BoardHeight);a[e][n].color==d.Empty?(a[e][n].color=t,T.checkForFive(e,n)):T.placeAtRandomSpot(t)}},tileClicked:function(t,e){if(g)if(null==m)a[t][e].color!=d.Empty&&(m=a[t][e]).div.setAttribute("selected","");else if(a[t][e].color==d.Empty){if(!new v([m.x,m.y],[t,e],_).found)return;a[t][e].color=m.color,a[m.x][m.y].color=d.Empty,m.div.removeAttribute("selected"),m=null,T.checkForFive(t,e)||T.nextRound()}else m.div.removeAttribute("selected"),a[t][e]!=m?(m=a[t][e]).div.setAttribute("selected",""):m=null},checkForFive:function(t,e){var n=a[t][e].color;if(n!=d.Empty){var i=function(t,e,n){return t>=0&&t<r.BoardWidth&&e>=0&&e<r.BoardHeight&&a[t][e].color==n},o=[],s=function(r,a,l,u){u&&o.push([t,e]);for(var c=1,p=r,d=a;i(t+p,e+d,n);)u&&o.push([t+p,e+d]),c++,p+=r,d+=a;for(p=r=-r,d=a=-a;i(t+p,e+d,n);)u&&o.push([t+p,e+d]),c++,p+=r,d+=a;c>=5&&!u&&s(r,a,l,!0)};s(-1,-1,n),s(-1,0,n),s(-1,1,n),s(0,-1,n);for(var l=0,u=o;l<u.length;l++){var c=u[l];a[c[0]][c[1]].color=d.Empty,b++}return T.updateScore(b),o.length>0}},updateScore:function(t){b=t,c.innerHTML=b.toString()}},w=T;addEventListener("DOMContentLoaded",(function(){w.start()}))}]);