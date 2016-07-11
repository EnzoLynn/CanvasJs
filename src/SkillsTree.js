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
			     .lineTo(0, 40).lineTo(20,40); //.drawCircle(0, 0, 50);
			lineL.x = rectW/2;
			lineL.y = rectH+20; 
			lineL.rotation = 90;
			container.addChild(lineL);

			var lineR = lineL.clone();
			lineR.scaleY = -1;	
			lineR.reverse = true;	
			 
			container.addChild(lineR);



			return {
				container: container,
				rect:rect,
				line: [line, lineL, lineR]
			};
		},
		createShadow:function(srcSharp,x,y){ 
			var px = x||0;
			var py = y||0;
			var filters = [new createjs.ColorFilter(0,0,0,0.6), new createjs.BlurFilter(5,5,1)];
			var frect = srcSharp.clone();
			frect.filters = filters;  
			frect.x=px+srcSharp.x+2;
			frect.y=py+srcSharp.y+2;
			frect.cache(0,0,800,600);
			
			return frect;
		},
		init: function() {
			var me = this;
			stage = new createjs.Stage(me.refs.skillTree);


			var skill = me.createSkill({
				x:110,
				y:0
			});
			  
			stage.addChild(me.createShadow(skill.rect,skill.container.x,skill.container.y));  
			stage.addChild(skill.container); 
			 

			var skill2 = me.createSkill({
				x:210,
				y:70 
			});
			stage.addChild(me.createShadow(skill2.rect,skill2.container.x,skill2.container.y)); 
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
					scaleX: 1,
					scaleY: 2
				}, 1000 * baseDelay, createjs.Ease.quintOut)
				.call(function() {
					stage.addChildAt(me.createShadow(skill2.line[0],skill2.container.x,skill2.container.y),
									skill2.container.getChildIndex(skill2.line[0]));
					skill2.line.forEach(function(element, index) {
						if(index==0)return true; 
						createjs.Tween.get(element, {
								loop: false
							})
							.to({
								alpha: 1,
								scaleX: 0.5,
								scaleY: element.reverse?-2:2
							}, 1000 * baseDelay, createjs.Ease.quintOut)
							.call(function(){ 
								stage.addChildAt(me.createShadow(element,skill2.container.x,skill2.container.y),
									skill2.container.getChildIndex(element));
							});
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
					<canvas ref='skillTree' className="demoCanvas" width="800" height="600">
						
					</canvas>
				</div>
			);
		}
	});
	module.exports = SkillsTree;
})