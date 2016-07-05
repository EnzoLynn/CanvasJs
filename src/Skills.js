define(function(require, exports, module) {

	var SkillsTree = require("js/SkillsTree");
	var Skills = {
 		render: function() {
 			ReactDOM.render(
 				<SkillsTree />,
 				document.getElementById("container")
 			);
 		}
 	};
 	module.exports = Skills;
})