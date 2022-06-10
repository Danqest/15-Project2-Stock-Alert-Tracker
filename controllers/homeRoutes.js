// const router = require('express').Router();
// const { Alerts, User } = require('../models');
// const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//   try {
//   //   // Get all projects and JOIN with user data
//     const projectData = await Project.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//   //   });
// // const alertData = [
// //   {
// //     username: "will",
// //     ticker: "AAPL",
// //     command: "Long",
// //     shares: 100,
// //     bidask: 102,
// //     current_price: 90,
// //     open: true,
// //     closed: false,
// //     gain: "10",
// //   },
// //   {
// //     username: "haris",
// //     ticker: "AMZN",
// //     command: "Long",
// //     shares: 100,
// //     bidask: 102,
// //     current_price: 90,
// //     open: true,
// //     closed: false,
// //     gain: "10",
// //   },
// //   {
// //     username: "testddsd",
// //     ticker: "tsla",
// //     command: "Long",
// //     shares: 100,
// //     bidask: 102,
// //     current_price: 90,
// //     open: true,
// //     closed: false,
// //     gain: "10",
// //   }
// ];
//     // Serialize data so the template can read it
//     // const projects = projectData.map((project) => project.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('homepage', { 
//       alertData, 
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// // router.get('/project/:id', async (req, res) => {
// //   try {
// //     const projectData = await Project.findByPk(req.params.id, {
// //       include: [
// //         {
// //           model: User,
// //           attributes: ['name'],
// //         },
// //       ],
// //     });

// //     const project = projectData.get({ plain: true });

// //     res.render('project', {
// //       ...project,
// //       logged_in: req.session.logged_in
// //     });
// //   } catch (err) {
// //     res.status(500).json(err);
// //   }
// // });

// // // Use withAuth middleware to prevent access to route
// // router.get('/dashboard', withAuth, async (req, res) => {
//   router.get('/homepage', async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     // const userData = await User.findByPk(req.session.user_id, {
//     //   attributes: { exclude: ['password'] },
//     //   include: [{ model: Project }],
//     // });

//     // const user = userData.get({ plain: true });
// //     const alerts = [
// //       {
// //       id: 1,
// //       title: "title1",
// //       content: "content1",
// //       author: "author1",
// //       date: "1/18/2022"
// //       },
// //       {
// //         id: 2,
// //         title: "title2",
// //         content: "content2",
// //         author: "author2",
// //         date: "1/19/2022"
// //       },
// //       {
// //           id: 3,
// //           title: "title3",
// //           content: "content3",
// //           author: "author3",
// //           date: "1/20/2022"
// //       }
// //     ];
// //     res.render('dashboard', {
// //       blogs,
// //       logged_in: true
// //     });
// //   } catch (err) {
// //     res.status(500).json(err);
// //   }
// // });

// //creating new blog
// router.get('/create-alert', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   // if (req.session.logged_in) {
//   //   res.redirect('/profile');
//   //   return;
//   // }

//   res.render('create-alert', {
//     logged_in: true
//   });
// });
// //editing blog
// router.get('/edit-alert', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   // if (req.session.logged_in) {
//   //   res.redirect('/profile');
//   //   return;
//   // }
//   // const alerts = [
//   //   {
//   //   id: "id",
//   //   title: "title1",
//   //   content: "content1",
//   //   author: "author1",
//   //   date: "1/18/2022"
//   //   }
//   // ]
//   res.render('edit-alert', {
//     blogs,
//     logged_in: true
//   });
// });

// module.exports = router;
