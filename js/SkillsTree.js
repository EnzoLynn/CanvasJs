"use strict";

define(function (require, exports, module) {
	var stage, container;

	var SkillsTree = React.createClass({
		displayName: "SkillsTree",

		init: function init() {
			var me = this;
			stage = new createjs.Stage(me.refs.skillTree);

			container = new createjs.Container();
			container.x = 0;
			container.y = 0;

			var rect = new createjs.Shape();
			rect.graphics.beginFill("DeepSkyBlue").drawRect(0, 0, 100, 30); //.drawCircle(0, 0, 50);
			container.addChild(rect);

			stage.addChild(container);

			stage.update();
		},
		componentDidMount: function componentDidMount() {
			var me = this;
			me.init();
		},
		render: function render() {
			return React.createElement(
				"div",
				{ className: "skills" },
				React.createElement("canvas", { ref: "skillTree", className: "demoCanvas", width: "400", height: "400" })
			);
		}
	});
	module.exports = SkillsTree;
});