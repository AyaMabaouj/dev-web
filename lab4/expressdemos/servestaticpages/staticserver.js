var express = require('express');
var  serverStatic = require('serve-static');
var app = express()
    .use(serverStatic(__dirname + '/public'))
    .listen(3000);
//ou plus simplement
var express = require('express');

var app = express()
    .use(express.static(__dirname + '/public'))
    .listen(3000);