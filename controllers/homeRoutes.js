const routes = require('express').Router();
const { Alert, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const path=require('path')

//homepage display routes
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
    // console.log('alerts', alerts);
    res.render('homepage', {
      alerts,
      loggedIn: req.session.loggedIn,
      closed_price: req.session.closed_price,
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
//   res.render('logout')
// })
//get the signup page from handlebars
routes.get('/signup',async (req,res)=>{
  res.render('signup')
})

//create alert routes
routes.get("/alert",async(req,res)=>{
  
  res.render('createalert', {
    loggedIn: req.session.loggedIn,
  })
})

//get profile information routes
routes.get("/profile",async(req,res)=>{
  res.render('profile', {
    loggedIn: req.session.loggedIn,
  })
})



module.exports = routes;
