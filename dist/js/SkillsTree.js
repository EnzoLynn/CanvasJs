"use strict";define(function(require,a,b){var c,d=3,e=React.createClass({displayName:"SkillsTree",createSkill:function(a){var b=a||{},c=new createjs.Container;c.x=b.x||0,c.y=b.y||0;var d=100,e=30,f=new createjs.Shape;f.graphics.beginFill("DeepSkyBlue").drawRect(0,0,d,e),c.addChild(f);var g=new createjs.Shape;g.graphics.beginStroke("#D60707").moveTo(0,0).lineTo(0,10),g.x=d/2,g.y=e,g.alpha=1,c.addChild(g);var h=new createjs.Shape;h.graphics.beginStroke("#D60707").moveTo(0,0).lineTo(0,40).lineTo(20,40),h.x=d/2,h.y=e+20,h.rotation=90,c.addChild(h);var i=h.clone();return i.scaleY=-1,i.reverse=!0,c.addChild(i),{container:c,rect:f,line:[g,h,i]}},createShadow:function(a,b,c){var d=b||0,e=c||0,f=[new createjs.ColorFilter(0,0,0,.6),new createjs.BlurFilter(5,5,1)],g=a.clone();return g.filters=f,g.x=d+a.x+2,g.y=e+a.y+2,g.cache(0,0,800,600),g},init:function(){function a(){c.update()}var b=this;c=new createjs.Stage(b.refs.skillTree);var e=b.createSkill({x:110,y:0});c.addChild(b.createShadow(e.rect,e.container.x,e.container.y)),c.addChild(e.container);var f=b.createSkill({x:210,y:70});c.addChild(b.createShadow(f.rect,f.container.x,f.container.y)),c.addChild(f.container),c.update(),createjs.Ticker.addEventListener("tick",a),createjs.Tween.get(f.line[0],{loop:!1}).to({alpha:1,scaleX:1,scaleY:2},1e3*d,createjs.Ease.quintOut).call(function(){c.addChildAt(b.createShadow(f.line[0],f.container.x,f.container.y),f.container.getChildIndex(f.line[0])),f.line.forEach(function(a,e){return 0==e?!0:void createjs.Tween.get(a,{loop:!1}).to({alpha:1,scaleX:.5,scaleY:a.reverse?-2:2},1e3*d,createjs.Ease.quintOut).call(function(){c.addChildAt(b.createShadow(a,f.container.x,f.container.y),f.container.getChildIndex(a))})})})},componentDidMount:function(){var a=this;a.init()},render:function(){return React.createElement("div",{className:"skills"},React.createElement("canvas",{ref:"skillTree",className:"demoCanvas",width:"800",height:"600"}))}});b.exports=e});