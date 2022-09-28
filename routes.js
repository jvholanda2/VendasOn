const express = require('express')
const routes = express.Router()

routes.get('/',function(req,res){
    return res.redirect("/login")
})
routes.get('/login',function(req,res){
    return res.render("login/login")
})
routes.get('/dashboard',function(req,res){
    return res.render("dashboard/dashboard")
})

module.exports = routes