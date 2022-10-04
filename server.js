const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const mysql = require('mysql');

const session = require('express-session');
const path = require('path');

const server = express();

server.use(session({
    secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(express.static('public'));
server.use(routes);

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
});

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'nodelogin'
});

server.listen(5000, function() {
    console.log('Tá rodando');
});



