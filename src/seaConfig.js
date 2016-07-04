'use strict';

var version = new Date();
var versionStr = version.getFullYear() + '' + (version.getMonth() + 1) + version.getDate();
seajs.config({
    base: "/",
    paths: {
        'images': '/image',
        'css': '/css',
        'js': '/js',
        'lib': '/js/lib',
        'model': '/js/model'
    },
    alias: {
        "jquery": "lib/jquery.min" 
    },
    map: [[/^(.*\.(?:css|js))(.*)$/i, '$1?v=' + versionStr + '']],
    charset: 'utf-8'
}); 