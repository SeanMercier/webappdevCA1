'use strict';

// import all required modules
const logger = require('../utils/logger');
const uuid = require('uuid');

const packStore = require('../models/pack-store.js');

// create dashboard object
const dashboard = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    
    // display confirmation message in log
    logger.info('dashboard rendering');
    
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'Movie Manager App Dashboard',
      packs: packStore.getAllPacks(),
    };
    
    // render the dashboard view and pass through the data
    logger.info('about to render', viewData.packs);
    response.render('dashboard', viewData);
  },
  
  removePack(request, response) {
    const packId = request.params.id;
    logger.debug(`Deleting Pack ${packId}`);
    packStore.removePack(packId);
    response.redirect('/dashboard');
  },
  
  addPack(request, response) {
    const newPack = {
      id: uuid(),
      title: request.body.title,
      duration: request.body.duration,
      movies: [],
    };
    packStore.addPack(newPack);
    response.redirect('/dashboard');
  },
};

// export the dashboard module
module.exports = dashboard;