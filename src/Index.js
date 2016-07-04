 define(function(require, exports, module) {
 	var Lottery = require('js/Lottery'); 
 	var Index = {
 		render: function() {
 			ReactDOM.render(
 				<Lottery />,
 				document.getElementById("container")
 			);
 		}
 	};
 	module.exports = Index;
 })