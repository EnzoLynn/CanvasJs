"use strict";

var init = function init() {
    //Create a stage by getting a reference to the canvas
    var stage = new createjs.Stage("demoCanvas");

    var circle = new createjs.Shape();
    circle.graphics.beginFill("#E11010").drawCircle(150, 150, 150);
    stage.addChild(circle);

    var rect = new createjs.Shape();
    rect.graphics.beginFill("DeepSkyBlue").drawRect(0, 0, 100, 100); //.drawCircle(0, 0, 50);
    rect.x = 150;
    rect.y = 150;
    stage.addChild(rect);

    var s = new createjs.Shape();
    s.graphics.setStrokeStyle(16, "round", "round").beginFill("#0F0").beginStroke("#f90").moveTo(20, 10).lineTo(90, 90).lineTo(90, 140);
    stage.addChild(s);

    stage.update();

    function handleClick(event) {
        // Click happenened
        console.log("click");
    }
    stage.addEventListener("click", handleClick);

    function handlePress(event) {
        // A mouse press happened.
        // Listen for mouse move while the mouse is down:
        console.log("press");
    }
    stage.addEventListener("mousedown", handlePress);

    function handleMove(event) {
        console.log("move");
        // Check out the DragAndDrop example in GitHub for more
    }
    stage.addEventListener("pressmove", handleMove);

    var angle = 0;

    function tick(event) {
        console.log("tick");
        angle += 1;
        var value = 12 * angle;

        rect.rotation = value;
        //circle.scaleX = circle.scaleY = value / 360;
        stage.update(event);
        // Check out the DragAndDrop example in GitHub for more
    }
    createjs.Ticker.addEventListener("tick", tick);
};