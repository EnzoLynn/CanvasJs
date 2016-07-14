"use strict";define(function(require,a,b){var c,d=1,e=React.createClass({displayName:"SkillsTree",createSkill:function(a){var b=a||{},c=new createjs.Container;c.x=b.x||0,c.y=b.y||0;var d=100,e=30,f=new createjs.Shape;f.name="rect",f.graphics.beginFill("DeepSkyBlue").drawRect(0,0,d,e),c.addChild(f);var g=new createjs.Shape;g.graphics.beginStroke("#D60707").moveTo(0,0).lineTo(0,10),g.x=d/2,g.y=e,g.alpha=1,g.name="line",c.addChild(g);var h=new createjs.Shape;h.graphics.beginStroke("#D60707").moveTo(0,0).lineTo(0,40).lineTo(20,40),h.x=d/2,h.y=e+20,h.rotation=90,h.name="lineL",c.addChild(h);var i=h.clone();return i.scaleY=-1,i.reverse=!0,i.name="lineR",c.addChild(i),c},createShadow:function(a,b,c){var d=this,e=b||0,f=c||0,g=[new createjs.ColorFilter(0,0,0,.6),new createjs.BlurFilter(5,5,1)],h=a.clone(!0);h.filters=g,h.x=e+a.x+2,h.y=f+a.y+2;var i=d.refs.skillTree.getAttribute("width"),j=d.refs.skillTree.getAttribute("height");return h.cache(-h.x,-h.y,i,j),h},init:function(){function a(){c.update()}function b(a){a.stageY<g.y&&console.log("up"),a.stageY==g.y&&console.log("=="),a.stageY>g.y&&console.log("down"),this.y=a.stageY,this.filterDom.y=a.stageY+2}var e=this;c=new createjs.Stage(e.refs.skillTree);var f=e.createSkill({x:350,y:285});f.filterDom={},c.addChild(f),c.update(),createjs.Ticker.addEventListener("tick",a);var g={x:f.x,y:f.y};f.on("pressmove",b),e.refs.skillTree.addEventListener("mousedown",function(a){console.log(c.globalToLocal(a.pageX-e.refs.skillTree.offsetLeft,a.pageY-e.refs.skillTree.offsetTop));var b=c.globalToLocal(a.pageX-e.refs.skillTree.offsetLeft,a.pageY-e.refs.skillTree.offsetTop),d=b.y-g.y;if(console.log(d/240),Math.abs(d)<240){f.y=b.y;var h=Math.abs(d)/240/2;f.scaleX=1-h,console.log(100*h/2);var i=g.x+100*h/2/2;f.x=i,f.filterDom.scaleX=1-h,f.filterDom.y=b.y+2,f.filterDom.x=i+2}}),createjs.Tween.get(f.getChildByName("line"),{loop:!1}).to({alpha:1,scaleX:2,scaleY:2},1e3*d,createjs.Ease.quintOut).call(function(){var a=f.getChildByName("lineL");createjs.Tween.get(a,{loop:!1}).to({alpha:1,scaleX:.5,scaleY:a.reverse?-2:2},1e3*d,createjs.Ease.quintOut),a=f.getChildByName("lineR"),createjs.Tween.get(a,{loop:!1}).to({alpha:1,scaleX:.5,scaleY:a.reverse?-2:2},1e3*d,createjs.Ease.quintOut).call(function(){f.filterDom=e.createShadow(f),c.addChildAt(f.filterDom,c.getChildIndex(f))})})},componentDidMount:function(){var a=this;a.init()},render:function(){return React.createElement("div",{className:"skills"},React.createElement("canvas",{ref:"skillTree",className:"demoCanvas",width:"800",height:"600"}))}});b.exports=e});