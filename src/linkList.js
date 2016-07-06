 define(function(require, exports, module) {

 	var LinkList = React.createClass({
 		render: function() {
 			return (
 				<div className="LinkList">
					<a href="index.html">轮盘</a>
					<a href="skills.html">技能树</a>
				</div>
 			);
 		}
 	});
 	module.exports = LinkList;
 })