"use strict";

define(function (require, exports, module) {

  var SkillsTree = require("js/SkillsTree");
  var LinkList = require('js/linkList');
  var Skills = {
    render: function render() {
      ReactDOM.render(React.createElement(
        "div",
        null,
        React.createElement(LinkList, null),
        React.createElement(SkillsTree, null)
      ), document.getElementById("container"));
    }
  };
  module.exports = Skills;
});