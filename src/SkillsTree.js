define(function(require, exports, module) {
	var stage,baseDelay=3;
	var skills = {
		"自动构建": ['Grunt', 'Glup', 'Webpack'],
		"自动编译": ['Babel', 'Less', 'Sass', 'Concat', 'Uglify', 'Cssmin', 'Copy', 'Jshint'],
		"编程语言": ['JavaScript', 'Html/Html5/DHtml', 'Css', 'NodeJs', 'C#'],
		"UI框架": ['Extjs', 'ThreeJs', 'MUI', 'Bootstrap', 'Framwork', 'SUI', 'Telerik'],
		"工具框架": ['ReactJs', 'React-Native', 'Handlebars', 'Jquery', 'Html5plus', 'Express', 'Modernizr'],
		"MVC框架": ['AngularJs', 'Backbone', 'EntityFramework'],
		"加载器": ['Seajs', 'RequireJs'],
		"数据库": ['SqlServer', 'Mongodb', 'Access'],
		"服务器": ['IIS', 'Nginx', 'Apathe'],
		"操作系统": ['Window', 'Windowserver', 'Linux', 'Centos'],
		"代码管理": ['Git', 'Svn', 'TFS'],
		"IDE/工具": ['Sublime', 'VisualStudio', 'Eclipse', 'Phtoshop', 'Coredraw', 'MsOffice'],
		"交互/协议": ['Json', 'Xml', 'Ajax', 'Http/Https', 'Tcp/IP', 'UDP']
	};
	var SkillsTree = React.createClass({
		createSkill: function(param) {
			var def = param||{};
			var container = new createjs.Container();

			container.x = def.x || 0;
			container.y = def.y || 0;

			var rectW=100,rectH=30;
			var rect = new createjs.Shape();
			rect.graphics.beginFill("DeepSkyBlue").drawRect(0, 0, rectW, rectH); //.drawCircle(0, 0, 50);
			container.addChild(rect);

			 

			var line = new createjs.Shape();
			line.graphics.beginStroke("#D60707").moveTo(0, 0).lineTo(0, 10); //.drawCircle(0, 0, 50);
			line.x = rectW/2;
			line.y = rectH;
			line.alpha = 1;
			container.addChild(line);

			var lineL = new createjs.Shape();
			lineL.graphics.beginStroke("#D60707").moveTo(0, 0)
			     .lineTo(0, 10).lineTo(10,10); //.drawCircle(0, 0, 50);
			lineL.x = rectW/2;
			lineL.y = rectH+40; 
			lineL.rotation = 90;
			container.addChild(lineL);

			var lineR = lineL.clone();
			lineR.scaleY = -1;		
			 
			container.addChild(lineR);



			return {
				container: container,
				line: [line, lineL, lineR]
			};
		},
		 
		init: function() {
			var me = this;
			stage = new createjs.Stage(me.refs.skillTree);


			var skill = me.createSkill({
				x:110,
				y:0 
			});
			var skill2 = me.createSkill({
				x:210,
				y:70 
			}); 

			stage.addChild(skill.container); 
			stage.addChild(skill2.container);

			stage.update();
			//createjs.Ticker.setFPS(20);
			createjs.Ticker.addEventListener("tick", tick);

			function tick() {
				stage.update();
			}

			// createjs.Tween.get(skill.line[0], {
			// 		loop: false
			// 	})
			// 	.to({
			// 		alpha: 1,
			// 		scaleX: 3,
			// 		scaleY: 4
			// 	}, 1000 * baseDelay, createjs.Ease.quintOut)
			// 	.call(function() {
			// 		skill.line.forEach(function(element, index) {
			// 			if(index==0)return true; 
			// 			createjs.Tween.get(element, {
			// 					loop: false
			// 				})
			// 				.to({
			// 					alpha: 1,
			// 					scaleX: 3,
			// 					scaleY: 4
			// 				}, 1000 * baseDelay, createjs.Ease.quintOut);
			// 		});
			// 	});

			createjs.Tween.get(skill2.line[0], {
					loop: false
				})
				.to({
					alpha: 1,
					scaleX: 3,
					scaleY: 4
				}, 1000 * baseDelay, createjs.Ease.quintOut)
				.call(function() {
					skill2.line.forEach(function(element, index) {
						if(index==0)return true; 
						createjs.Tween.get(element, {
								loop: false
							})
							.to({
								alpha: 1,
								scaleX: 3,
								scaleY: 4
							}, 1000 * baseDelay, createjs.Ease.quintOut);
					});
				});



		},
		componentDidMount: function() {
			var me = this;
			me.init();
		},
		render: function() {
			return (
				<div className="skills">					
					<canvas ref='skillTree' className="demoCanvas" width="400" height="400">
						
					</canvas>
				</div>
			);
		}
	});
	module.exports = SkillsTree;
})