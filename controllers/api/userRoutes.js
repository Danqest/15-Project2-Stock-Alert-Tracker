const router = require('express').Router();
const session = require('express-session');
const path = require('path');
const User = require('../../models/User');



// router.post('/', async (req, res) => {
//   try {
//     const userData = await User.create(req.body);

//     //  to save user logged in and user id
//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// the api/user/signup endpoint
//sign up create new account Routes
router.post('/signup', async (req, res) => {
  const newAcount = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
  };
  try {
      const userData = await User.create(newAcount);
      if (!userData) {
          res.status(404).json({ message: 'Please filled all the required and try again' })
          return
      }
      console.log(userData)
      req.session.save(() => {
        req.session.loggedIn = true;
        res.status(201).json({ message: `Register successed, Welcome ${userData.username} To Our Website!`});
        return;
      });

  } catch (err) {
      res.status(404).json({message:'Please check your information again'})
  }
  console.log({message:'/api/user/singup POST routes had run'})
});

// login route
//check user info through signin page
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'The email not found, please try diffrent email' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = req.session.logged_in;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json({message: 'Check email or password and try again'});
  }
  console.log({message:'/api/user/login POST routes had run'})
});



router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
