"use strict";define(function(require,a,b){var c,d,e,f=["大奖","二等奖","三等奖","四等奖","五等奖","安慰奖","谢谢参与","再来1次","谢谢参与2"],g=["#023613","#660404","#544902"],h=0,i=200,j=200,k=React.createClass({displayName:"Lottery",createBgArc:function(a,b,c){var d=new createjs.Shape;d.graphics.beginStroke(b).beginFill(b).arc(0,0,148,0,2*Math.PI/9).lineTo(0,0),d.x=i,d.y=j,d.rotation=c,a.addChild(d)},init:function(){function a(a){console.log("click")}function b(a){console.log("press")}function e(a){console.log("move")}var h=this;c=new createjs.Stage(h.refs.demoCanvas),d=new createjs.Container,d.x=i,d.y=j,d.regX=i,d.regY=j;var k=new createjs.Shape;k.graphics.beginFill("#E11010").drawCircle(0,0,150),k.x=i,k.y=j,d.addChild(k);var l=new createjs.Shape;l.graphics.setStrokeStyle(3,"round","round").beginFill("#00FF24").beginStroke("#00FF24").moveTo(0,0).lineTo(0,150),l.x=i,l.y=j,d.addChild(l);var m=new createjs.Text(f[0],"16px Arial","#FFF");m.x=i,m.y=j,m.rotation=110,m.regX=-50,m.regY=6,d.addChild(m);for(var n=0;9>n;n++){h.createBgArc(d,g[n%3],90+40*n);var o=l.clone();o.rotation=40*n,d.addChild(o);var p=m.clone();p.text=f[n],p.rotation=110+40*n,d.addChild(p)}var q=new createjs.Shape;q.graphics.setStrokeStyle(11,"round","round").beginStroke("#0048FF").arc(i,j,150,0,2*Math.PI),d.addChild(q),c.addChild(d);var r=new createjs.Shape;r.graphics.setStrokeStyle(1,"round","round").beginFill("DeepSkyBlue").beginStroke("DeepSkyBlue").moveTo(0,0).lineTo(0,90).lineTo(-12,90).lineTo(2,110).lineTo(18,90).lineTo(6,90).lineTo(6,0),r.x=i,r.y=j,r.regX=3,c.addChild(r),c.update(),c.addEventListener("click",a),c.addEventListener("mousedown",b),c.addEventListener("pressmove",e),createjs.Ticker.setFPS(60),createjs.Ticker.addEventListener("tick",c)},start:function(){var a=this,b=a.refs.button;b.disabled="disabled";var c=Math.random();console.log(c),createjs.Tween.get(d,{loop:!1}).to({rotation:-h}).call(function(){h=360*c,e=Math.round(3600+h);var g=f[f.length-1-Math.floor(h/40)];console.log(h/40),console.log(f[f.length-1-Math.floor(h/40)]),createjs.Tween.get(d,{loop:!1}).to({rotation:e},1e4,createjs.Ease.quintOut).call(function(){console.log(h),b.disabled=!1,a.refs.result.innerHTML="开奖结果："+g})})},componentDidMount:function(){this.init()},render:function(){return React.createElement("div",{className:"lottery"},React.createElement("canvas",{ref:"demoCanvas",className:"demoCanvas",width:"400",height:"400"}),React.createElement("input",{ref:"button",type:"button",value:"start",onClick:this.start}),React.createElement("div",{ref:"result"}))}});b.exports=k});