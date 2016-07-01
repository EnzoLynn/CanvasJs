var init = function() {
	// var width = (document.documentElement.clientWidth||document.body.clientWidth) -20;
	// var height = (document.documentElement.clientHeight||document.body.clientHeight) -20; 
	// document.getElementById('demoCanvas').width =width;
	// document.getElementById('demoCanvas').height =height;
    //Create a stage by getting a reference to the canvas
    var stage = new createjs.Stage("demoCanvas");

    var container = new createjs.Container();
	 

    var circle = new createjs.Shape();
    circle.graphics.beginFill("#E11010").drawCircle(250, 250, 150);
    container.addChild(circle);


    // var rect = new createjs.Shape();
    // rect.graphics.beginFill("DeepSkyBlue").drawRect(0, 0, 100, 30); //.drawCircle(0, 0, 50);
    // rect.x = 150;
    // rect.y = 150;   
    var sLine =  new createjs.Shape();
    sLine.graphics.setStrokeStyle(3, "round", "round").beginFill("#00FF24").beginStroke("#00FF24")
    .moveTo(0, 0).lineTo(0, 150);
    sLine.x=250;
    sLine.y=250;
    container.addChild(sLine);
    var sLine30 = sLine.clone();
    sLine30.rotation = 30;
    container.addChild(sLine30);


    var circleArc = new createjs.Shape();
    circleArc.graphics.setStrokeStyle(11, "round", "round").beginStroke("#0048FF").arc(250,250,150,0,Math.PI*2);
    container.addChild(circleArc);

    var s = new createjs.Shape();
    s.graphics.setStrokeStyle(1, "round", "round").beginFill("DeepSkyBlue")
    .beginStroke("DeepSkyBlue").moveTo(0, 0).lineTo(0, 90)
    .lineTo(-12,90).lineTo(2,110).lineTo(18,90)
    .lineTo(6,90).lineTo(6,0)
    s.x=250;
    s.y=250;
    s.regX=3;
    container.addChild(s);

    stage.addChild(container);
    //stage.addChild(rect);
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

        s.rotation = value;
        //circle.scaleX = circle.scaleY = value / 360;
        stage.update(event);
        // Check out the DragAndDrop example in GitHub for more
    }
    createjs.Ticker.addEventListener("tick", tick);
}