const routes = require('express').Router();
const { Alerts, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const path=require('path')

//get the Homepage routes from the homepage handlebars
routes.get('/',async (req,res)=>{
  res.render('homepage')
})
//get the login page from handlebars
routes.get('/login',async (req,res)=>{
  res.render('login')
})
//get the signup page from handlebars
routes.get('/signup',async (req,res)=>{
  res.render('signup')
})
// routes.get('/signup',(req,res)=>{
//   res.sendFile(path.join(__dirname,'../views/signup.html'))
// })

module.exports = routes;
