"use strict";

define(function (require, exports, module) {

  var LinkList = React.createClass({
    displayName: "LinkList",

    render: function render() {
      return React.createElement(
        "div",
        { className: "LinkList" },
        React.createElement(
          "a",
          { href: "index.html" },
          "轮盘"
        ),
        React.createElement(
          "a",
          { href: "skills.html" },
          "技能树"
        )
      );
    }
  });
  module.exports = LinkList;
});