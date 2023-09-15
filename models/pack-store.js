'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const packStore = {

  store: new JsonStore('./models/pack-store.json', { packCollection: [] }),
  collection: 'packCollection',

  getAllPacks() {
    return this.store.findAll(this.collection);
  },

  getPack(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addPack(pack) {
    this.store.add(this.collection, pack);
  },
  removePack(id) {
    const pack = this.getPack(id);
    this.store.remove(this.collection, pack);
  },
  
  removeAllPacks() {
    this.store.removeAll(this.collection);
  },

  addMovie(id, movie) {
    const pack = this.getPack(id);
    pack.movies.push(movie);
  },

  removeMovie(id, movieId) {
    const pack = this.getPack(id);
    const movies = pack.movies;
    _.remove(movies, { id: movieId});
  },
};

module.exports = packStore;