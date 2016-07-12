'use strict';

define(function (require, exports, module) {
			var arr = ['大奖', '二等奖', '三等奖', '四等奖', '五等奖', '安慰奖', '谢谢参与', '再来1次', '谢谢参与2'];
			var bgColors = ['#023613', '#660404', '#544902'];
			var stage, container, rotation;
			var preAngle = 0;
			var regX = 200,
			    regY = 200;
			var Lottery = React.createClass({
						displayName: 'Lottery',

						getCss: function getCss(obj) {
									if (obj.currentStyle) {
												return obj.currentStyle;
									} else {
												return getComputedStyle(obj, false);
									}
						},
						createBgArc: function createBgArc(container, color, angel) {
									var s1 = new createjs.Shape();
									s1.graphics.beginStroke(color).beginFill(color).arc(0, 0, 148, 0, Math.PI * 2 / 9).lineTo(0, 0);
									s1.x = regX;
									s1.y = regY;
									s1.rotation = angel;
									container.addChild(s1);
						},
						init: function init() {
									var me = this;

									// var width = (document.documentElement.clientWidth||document.body.clientWidth) -20;
									// var height = (document.documentElement.clientHeight||document.body.clientHeight) -20;
									// document.getElementById('demoCanvas').width =width;
									// document.getElementById('demoCanvas').height =height;
									//Create a stage by getting a reference to the canvas
									stage = new createjs.Stage(me.refs.demoCanvas);

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
									sLine.graphics.setStrokeStyle(3, "round", "round").beginFill("#00FF24").beginStroke("#00FF24").moveTo(0, 0).lineTo(0, 150);
									sLine.x = regX;
									sLine.y = regY;
									container.addChild(sLine);

									var sText = new createjs.Text(arr[0], "16px Arial", "#FFF");
									sText.x = regX;
									sText.y = regY;
									sText.rotation = 110;
									sText.regX = -50;
									sText.regY = 6;
									container.addChild(sText);

									for (var i = 0; i < 9; i++) {
												me.createBgArc(container, bgColors[i % 3], 90 + i * 40);

												var sLine30 = sLine.clone();
												sLine30.rotation = i * 40;
												container.addChild(sLine30);

												var sText15 = sText.clone();
												sText15.text = arr[i];
												sText15.rotation = 110 + i * 40;
												container.addChild(sText15);
									};

									var circleArc = new createjs.Shape();
									circleArc.graphics.setStrokeStyle(11, "round", "round").beginStroke("#0048FF").arc(regX, regY, 150, 0, Math.PI * 2);
									container.addChild(circleArc);

									stage.addChild(container);

									var content = new createjs.DOMElement(me.refs.foo);
									var height = parseInt(me.getCss(me.refs.button).height);
									content.regY = regY + height / 2;
									//content.visible = false;
									stage.addChild(content);

									var s = new createjs.Shape();
									s.graphics.setStrokeStyle(1, "round", "round").beginFill("DeepSkyBlue").beginStroke("DeepSkyBlue").moveTo(0, 0).lineTo(0, 90).lineTo(-12, 90).lineTo(2, 110).lineTo(18, 90).lineTo(6, 90).lineTo(6, 0);
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

									createjs.Ticker.addEventListener("tick", tick);

									function tick(event) {

												stage.update(event);
									}

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
						},
						start: function start() {
									var me = this;
									var btn = me.refs.button;
									btn.disabled = 'disabled';
									var angle = Math.random();
									console.log(angle);
									createjs.Tween.get(container, {
												loop: false
									}).to({
												rotation: -preAngle
									}).call(function () {
												preAngle = 360 * angle;
												rotation = Math.round(3600 + preAngle);
												var reslut = arr[arr.length - 1 - Math.floor(preAngle / 40)];
												console.log(preAngle / 40);
												console.log(arr[arr.length - 1 - Math.floor(preAngle / 40)]);
												createjs.Tween.get(container, {
															loop: false
												}).to({
															rotation: rotation
												}, 1000 * 10, createjs.Ease.quintOut).call(function () {
															console.log(preAngle);
															btn.disabled = false;
															me.refs.result.innerHTML = '开奖结果：' + reslut;
												});
									});
						},
						componentDidMount: function componentDidMount() {
									this.init();
						},
						render: function render() {
									return React.createElement(
												'div',
												{ className: 'lottery' },
												React.createElement('canvas', { ref: 'demoCanvas', className: 'demoCanvas', width: '400', height: '400' }),
												React.createElement(
															'div',
															{ ref: 'foo', className: 'foo' },
															React.createElement(
																		'button',
																		{ ref: 'button', className: 'button', onClick: this.start },
																		'开始'
															)
												),
												React.createElement('div', { ref: 'result', className: 'result' })
									);
						}
			});
			module.exports = Lottery;
});