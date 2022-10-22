const express = require('express');
const routes = express.Router();
const mysql = require('mysql');
const ProductController =  require('./src/app/controllers/ProductController')

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'nodelogin'
});

routes.get('/',function(req,res){
    return res.redirect("/login")
})
routes.get('/login',function(req,res){
    if(req.session.loggedin){
        return res.render("dashboard/dashboard")
    }
    return res.render("login/login")
})
routes.get('/dashboard',function(req,res){
    if(req.session.loggedin){
        return res.render("dashboard/dashboard")
    }
    return res.render("login/login")
})

routes.get('/register',function(req,res){
    return res.render("register/register")
})

routes.post('/register', function(request,response){
    let username = request.body.username;
	let password = request.body.password;
    let email = request.body.email;

    if(username && password && email) {
        connection.query("INSERT INTO `accounts` (`username`, `password`, `email`) VALUES (?, ?, ?);", [username, password, email], function(error, results, fields){
            if (error) throw error;
            request.session.loggedin = true;
			request.session.username = username;
			// Redirect to home page
		    response.redirect('/dashboard');
        })
    }
})

routes.post('/auth', function(request, response) {
	
	let username = request.body.username;
	let password = request.body.password;
	
	if (username && password) {
		
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			
			if (error) throw error;
			
			if (results.length > 0) {
				
				request.session.loggedin = true;
				request.session.username = username;
				
				response.redirect('/dashboard');
			} else {
				response.redirect('/login?e=Desautorizado');
			}			
			response.end();
		});
	} else {
		//response.send('Por favor, digite email ou senha corretos!');
		response.end();
	}
});

routes.get('/logout',function(req,res){
    if(req.session){
        req.session.destroy();
    }
    res.redirect('/login');
})

module.exports = routes