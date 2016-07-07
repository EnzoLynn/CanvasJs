define(function(require, exports, module) {
	require('js/CheckNav');
	var SkillsTree = require("js/SkillsTree");
	var LinkList = require('js/linkList');
	var Skills = {
 		render: function() {
 			ReactDOM.render(
 				<div><LinkList/><SkillsTree /></div>,
 				document.getElementById("container")
 			);
 		}
 	};
 	module.exports = Skills;
})