 define(function(require, exports, module) {
 	require('js/CheckNav');
 	var Lottery = require('js/Lottery'); 
 	var LinkList = require('js/linkList');
 	var Index = {
 		render: function() {
 			ReactDOM.render(
 				<div><LinkList/><Lottery /></div>,
 				document.getElementById("container")
 			);
 		}
 	};
 	module.exports = Index;
 })