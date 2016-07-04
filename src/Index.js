var stage, container, rotation;
var init = function() {
	var regX = 200,regY=200;
	// var width = (document.documentElement.clientWidth||document.body.clientWidth) -20;
	// var height = (document.documentElement.clientHeight||document.body.clientHeight) -20; 
	// document.getElementById('demoCanvas').width =width;
	// document.getElementById('demoCanvas').height =height;
	//Create a stage by getting a reference to the canvas
	stage = new createjs.Stage("demoCanvas");

	container = new createjs.Container();
	container.x = regX;
	container.y = regY;
	container.regX = regX;
	container.regY = regY;


	var circle = new createjs.Shape();
	circle.graphics.beginFill("#E11010").drawCircle(0, 0, 150);
	circle.x = regX;
	circle.y = regY;
	// circle.regX = 75;
	container.addChild(circle);


	// var rect = new createjs.Shape();
	// rect.graphics.beginFill("DeepSkyBlue").drawRect(0, 0, 100, 30); //.drawCircle(0, 0, 50);
	// rect.x = 150;
	// rect.y = 150;   
	var sLine = new createjs.Shape();
	sLine.graphics.setStrokeStyle(3, "round", "round").beginFill("#00FF24").beginStroke("#00FF24")
		.moveTo(0, 0).lineTo(0, 150);
	sLine.x = regX;
	sLine.y = regY;
	container.addChild(sLine);

	var sText = new createjs.Text("text!" + 0, "36px Arial", "#FFF");
	sText.x = regX;
	sText.y = regY;
	container.addChild(sText);


	for (var i = 0; i < 9; i++) {
		var sLine30 = sLine.clone();
		sLine30.rotation = i * 40;
		container.addChild(sLine30);
	};



	var circleArc = new createjs.Shape();
	circleArc.graphics.setStrokeStyle(11, "round", "round").beginStroke("#0048FF").arc(regX, regY, 150, 0, Math.PI * 2);
	container.addChild(circleArc);

	stage.addChild(container);

	var s = new createjs.Shape();
	s.graphics.setStrokeStyle(1, "round", "round").beginFill("DeepSkyBlue")
		.beginStroke("DeepSkyBlue").moveTo(0, 0).lineTo(0, 90)
		.lineTo(-12, 90).lineTo(2, 110).lineTo(18, 90)
		.lineTo(6, 90).lineTo(6, 0)
	s.x = regX;
	s.y = regY;
	s.regX = 3;
	stage.addChild(s);


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



	createjs.Ticker.setFPS(60);

	createjs.Ticker.addEventListener("tick", stage);

	// function tick(event) {
	// 	console.log("tick");	
	// 	var value = 12 * angle;

	// 	angle ++;

	// 	//container.rotation = value;
	// 	//circle.scaleX = circle.scaleY = value / 360;
	// 	//stage.update(event);
	// 	// Check out the DragAndDrop example in GitHub for more
	// }
	// createjs.Ticker.addEventListener("tick", tick);


}
var preAngle = 0;
var start = function() {
	var btn = document.getElementById('button');
	btn.disabled = 'disabled';
	var angle = Math.random();
	console.log(angle);
	createjs.Tween.get(container, {
			loop: false
		})
		.to({
			rotation: -preAngle
		}).call(function() {
			preAngle = 360 * angle;
			rotation = Math.round(3600 + preAngle);
			createjs.Tween.get(container, {
					loop: false
				})
				.to({
					rotation: rotation
				}, 6000, createjs.Ease.quintOut)
				.wait(1000)
				.call(function() {
					console.log(preAngle);
					btn.disabled = false;
				});
		});

	
}