const express = require('express')
const routes = express.Router()

routes.get('/',function(req,res){
    return res.redirect("/instructors")
})
routes.get('/login',function(req,res){
    return res.render("login/login")
})
routes.get('/members',function(req,res){
    return res.send("members")
})

module.exports = routes