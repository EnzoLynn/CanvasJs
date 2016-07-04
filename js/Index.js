"use strict";

define(function (require, exports, module) {
  var Lottery = require('js/Lottery');
  var Index = {
    render: function render() {
      ReactDOM.render(React.createElement(Lottery, null), document.getElementById("container"));
    }
  };
  module.exports = Index;
});