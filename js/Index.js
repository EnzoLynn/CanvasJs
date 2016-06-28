"use strict";

var init = function init() {
    //Create a stage by getting a reference to the canvas
    var stage = new createjs.Stage("demoCanvas");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawRect(0, 0, 100, 100); //.drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
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

        circle.rotation = value;
        //circle.scaleX = circle.scaleY = value / 360;
        stage.update(event);
        // Check out the DragAndDrop example in GitHub for more
    }
    createjs.Ticker.addEventListener("tick", tick);
};