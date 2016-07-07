'use strict';

define(function (require, exports, module) {
	var stage;
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
		displayName: 'SkillsTree',

		createSkill: function createSkill(x, y) {
			var container = new createjs.Container();
			container.x = x || 0;
			container.y = y || 0;

			var rect = new createjs.Shape();
			rect.graphics.beginFill("DeepSkyBlue").drawRect(0, 0, 100, 30); //.drawCircle(0, 0, 50);
			container.addChild(rect);

			var line = new createjs.Shape();
			line.graphics.beginStroke("#D60707").moveTo(0, 0).lineTo(0, 10); //.drawCircle(0, 0, 50);
			line.x = 50;
			line.y = 30;
			line.alpha = 0;
			container.addChild(line);

			var lineL = line.clone();
			lineL.y = 70;
			lineL.alpha = 1;
			lineL.rotation = 90;
			container.addChild(lineL);

			var lineR = lineL.clone();
			lineR.rotation = 270;
			container.addChild(lineR);

			return {
				container: container,
				line: [line, lineL, lineR]
			};
		},
		init: function init() {
			var me = this;
			stage = new createjs.Stage(me.refs.skillTree);

			var skill = me.createSkill();
			var skill2 = me.createSkill(110, 50);

			stage.addChild(skill.container);
			stage.addChild(skill2.container);

			stage.update();
			//createjs.Ticker.setFPS(20);
			createjs.Ticker.addEventListener("tick", tick);
			function tick() {
				stage.update();
			}

			skill.line.forEach(function (element, index) {
				createjs.Tween.get(element, {
					loop: false
				}).to({
					alpha: 1,
					scaleX: 3,
					scaleY: 4
				}, 1000 * 10, createjs.Ease.quintOut);
			});
		},
		componentDidMount: function componentDidMount() {
			var me = this;
			me.init();
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'skills' },
				React.createElement('canvas', { ref: 'skillTree', className: 'demoCanvas', width: '400', height: '400' })
			);
		}
	});
	module.exports = SkillsTree;
});