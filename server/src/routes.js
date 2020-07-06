const express = require('express');
const routes = express.Router();

const AdsControllers = require('./app/controllers/AdsControllers');
const UsersControllers = require('./app/controllers/UsersControllers');

// routes.get('/', (req, res) => res.render('user/index'));

routes.get('/register', UsersControllers.register);

routes.get('/login', UsersControllers.login);

routes.post('/ads', AdsControllers.post);
routes.put('/ads', AdsControllers.put);
routes.delete('/ads', AdsControllers.delete);

routes.get('/ads/create', AdsControllers.create);
routes.get('/ads/:id/edit', AdsControllers.edit);

module.exports = routes;