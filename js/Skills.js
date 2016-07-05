"use strict";

define(function (require, exports, module) {

  var SkillsTree = require("js/SkillsTree");
  var Skills = {
    render: function render() {
      ReactDOM.render(React.createElement(SkillsTree, null), document.getElementById("container"));
    }
  };
  module.exports = Skills;
});