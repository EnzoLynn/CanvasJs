"use strict";var init=function(){function handleClick(event){console.log("click")}function handlePress(event){console.log("press")}function handleMove(event){console.log("move")}function tick(event){console.log("tick"),angle+=1;var value=12*angle;s.rotation=value,stage.update(event)}var stage=new createjs.Stage("demoCanvas"),container=new createjs.Container,circle=new createjs.Shape;circle.graphics.setStrokeStyle(11,"round","round").beginFill("#E11010").beginStroke("DeepSkyBlue").drawCircle(250,250,150),container.addChild(circle);var s=new createjs.Shape;s.graphics.setStrokeStyle(1,"round","round").beginFill("DeepSkyBlue").beginStroke("DeepSkyBlue").moveTo(0,0).lineTo(0,90).lineTo(-12,90).lineTo(2,110).lineTo(18,90).lineTo(6,90).lineTo(6,0),s.x=250,s.y=250,s.regX=3,container.addChild(s),stage.addChild(container),stage.update(),stage.addEventListener("click",handleClick),stage.addEventListener("mousedown",handlePress),stage.addEventListener("pressmove",handleMove);var angle=0;createjs.Ticker.addEventListener("tick",tick)};