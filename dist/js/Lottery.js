"use strict";define(function(require,a,b){var c,d,e,f=0,g=React.createClass({displayName:"Lottery",init:function(){function a(a){console.log("click")}function b(a){console.log("press")}function e(a){console.log("move")}var f=200,g=200;c=new createjs.Stage("demoCanvas"),d=new createjs.Container,d.x=f,d.y=g,d.regX=f,d.regY=g;var h=new createjs.Shape;h.graphics.beginFill("#E11010").drawCircle(0,0,150),h.x=f,h.y=g,d.addChild(h);var i=new createjs.Shape;i.graphics.setStrokeStyle(3,"round","round").beginFill("#00FF24").beginStroke("#00FF24").moveTo(0,0).lineTo(0,150),i.x=f,i.y=g,d.addChild(i);var j=new createjs.Text("text!0","36px Arial","#FFF");j.x=f,j.y=g,d.addChild(j);for(var k=0;9>k;k++){var l=i.clone();l.rotation=40*k,d.addChild(l)}var m=new createjs.Shape;m.graphics.setStrokeStyle(11,"round","round").beginStroke("#0048FF").arc(f,g,150,0,2*Math.PI),d.addChild(m),c.addChild(d);var n=new createjs.Shape;n.graphics.setStrokeStyle(1,"round","round").beginFill("DeepSkyBlue").beginStroke("DeepSkyBlue").moveTo(0,0).lineTo(0,90).lineTo(-12,90).lineTo(2,110).lineTo(18,90).lineTo(6,90).lineTo(6,0),n.x=f,n.y=g,n.regX=3,c.addChild(n),c.update(),c.addEventListener("click",a),c.addEventListener("mousedown",b),c.addEventListener("pressmove",e),createjs.Ticker.setFPS(60),createjs.Ticker.addEventListener("tick",c)},start:function(){var a=document.getElementById("button");a.disabled="disabled";var b=Math.random();console.log(b),createjs.Tween.get(d,{loop:!1}).to({rotation:-f}).call(function(){f=360*b,e=Math.round(3600+f),createjs.Tween.get(d,{loop:!1}).to({rotation:e},6e3,createjs.Ease.quintOut).wait(1e3).call(function(){console.log(f),a.disabled=!1})})},componentDidMount:function(){this.init()},render:function(){return React.createElement("div",{className:"lottery"},React.createElement("canvas",{id:"demoCanvas",width:"400",height:"400"}),React.createElement("input",{id:"button",type:"button",value:"start",onClick:this.start}))}});b.exports=g});