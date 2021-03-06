'use strict';

var version = new Date();
var versionStr = version.getFullYear() + '' + (version.getMonth() + 1) + version.getDate();
var dist = '';
seajs.config({
    base: "/",
    paths: {
        'images': dist + '/image',
        'css': dist + '/css',
        'js': dist + '/js',
        'lib': dist + '/js/lib',
        'model': dist + '/js/model'
    },
    alias: {
        "jquery": "lib/jquery.min"
    },
    map: [[/^(.*\.(?:css|js))(.*)$/i, '$1?v=' + versionStr + '']],
    charset: 'utf-8'
});