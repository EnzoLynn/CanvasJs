"use strict";

define(function (require, exports, module) {
  (function () {
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.isIE = s[1] : (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.isGecko = s[1] : (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.isWebkit = s[1] : (s = ua.match(/opera.([\d.]+)/)) ? Sys.IsOpera = s[1] : (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.isSafari = s[1] : (s = ua.match(/rv:([\d.]+)/)) ? Sys.isEdge = s[1] : 0;

    if (Sys.isIE && parseInt(Sys.isIE) < 9) {
      document.write("<h1 style='color:red'>请使用IE9以上的浏览器，或使用火狐、Chrome、Edge、Safari等主流浏览器</h1>");
      window.stop();
    };
  })();
});