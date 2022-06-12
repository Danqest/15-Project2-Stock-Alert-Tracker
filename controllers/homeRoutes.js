const routes = require('express').Router();
const { Alert, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const path=require('path')

routes.get('/',async (req,res)=>{
  try {
    // Get all alerts and JOIN with user data
    const alertData = await Alert.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const alerts = alertData.map((alert) => alert.get({ plain: true }));


    // Pass serialized data and session flag into template
    console.log('alerts', alerts);
    res.render('homepage', {
      alerts,
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  
  }
});
//get the login page from handlebars
routes.get('/login',async (req,res)=>{
  res.render('login')
})
// routes.get('/logout',async (req,res)=>{
//   res.render('login')
// })
//get the signup page from handlebars
routes.get('/signup',async (req,res)=>{
  res.render('signup')
})

// routes.get('/signup',(req,res)=>{
//   res.sendFile(path.join(__dirname,'../views/signup.html'))
// })

module.exports = routes;
