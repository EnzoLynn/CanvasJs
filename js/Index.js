'use strict';

define(function (require, exports, module) {
  require('js/CheckNav');
  var Lottery = require('js/Lottery');
  var LinkList = require('js/linkList');
  var Index = {
    render: function render() {
      ReactDOM.render(React.createElement(
        'div',
        null,
        React.createElement(LinkList, null),
        React.createElement(Lottery, null)
      ), document.getElementById("container"));
    }
  };
  module.exports = Index;
});