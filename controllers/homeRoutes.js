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
      // user_id: req.session.user_id,
    });

  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  
  }
});

//get the login page from handlebars
routes.get('/login',async (req,res)=>{
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login')
})

//get the signup page from handlebars
routes.get('/signup',async (req,res)=>{
  res.render('signup')
})
routes.get('/alert', (req, res) => {
  res.render('createalert', {
    loggedIn: true,
  });
});
//view alert by id routes
routes.get('/alert/:id',withAuth, async (req, res) => {
  const alertData = await Alert.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: ['username'],
      },
      // {
      //   model: Comment,
      //   include: {
      //     model: User,
      //     attributes: ['username'],
      //   },
      // },
    ],
  });
// console.log( alertData)
  const alert = alertData.get({ plain: true });
  res.render('viewalert', {
    ...alert,
    loggedIN: true,
  });
});
//closed the alert
// routes.get("/close",async(req,res)=>{
//   res.render('closealert', {
//     loggedIn: req.session.loggedIn,
//   })
// })
//get profile information routes
routes.get("/profile",async(req,res)=>{
  res.render('profile', {
    loggedIn: req.session.loggedIn,
  })
})



module.exports = routes;
