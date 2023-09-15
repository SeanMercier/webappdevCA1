'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const pack = require('./controllers/pack.js');

router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);

router.get('/pack/:id', pack.index);

router.get('/pack/:id/deleteMovie/:movieid', pack.deleteMovie);
router.post('/pack/:id/addmovie', pack.addMovie);

router.get('/dashboard/removepack/:id', dashboard.removePack);
router.post('/dashboard/addpack', dashboard.addPack);

module.exports = router