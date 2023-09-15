'use strict';

const logger = require('../utils/logger');
const packStore = require('../models/pack-store');
const uuid = require('uuid');

const pack = {
  index(request, response) {
    const packId = request.params.id;
    logger.debug('Pack id = ' + packId);
    const viewData = {
      title: 'Pack',
      pack: packStore.getPack(packId),
    };
    response.render('pack', viewData);
  },
    deleteMovie(request, response) {
    const packId = request.params.id;
    const movieId = request.params.movieid;
    logger.debug(`Deleting Movie ${movieId} from Pack ${packId}`);
    packStore.removeMovie(packId, movieId);
    response.redirect('/pack/' + packId);
  },
  addMovie(request, response) {
    const packId = request.params.id;
    const pack = packStore.getPack(packId);
    const newMovie = {
      id: uuid(),
      title: request.body.title,
      director: request.body.director,
      duration: request.body.duration
    };
    packStore.addMovie(packId, newMovie);
    response.redirect('/pack/' + packId);
  },
};

module.exports = pack;