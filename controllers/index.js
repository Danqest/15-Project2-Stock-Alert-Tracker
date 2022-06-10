const router = require('express').Router();
const userRoutes = require('./userRoutes');
const alertRoutes = require('./alertRoutes');
const commentRoutes = require('./api/commentRoutes.js')

routes.use('/user', userRoutes);
routes.use('/events', alertRoutes)
routes.use('/comments', commentRoutes)

module.exports=routes;