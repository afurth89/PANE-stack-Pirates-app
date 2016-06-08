var express = require('express'),
    router = express.Router(),
    knex = require('../db/knex');

router.route('/')
// GET '/'
  .get((req, res) => {
    knex('pirates').select()
      .then(function(pirates) {
        res.send(pirates);
      })
      .catch(function(err) {
        res.send(err);
      })
  })
// POST '/'
  .post((req, res) => {
    knex('pirates').insert(req.body.pirate)
      .returning('*')
      .then(function(pirate) {
        console.log("SUCCESSFUL POST: ", pirate)
        res.send(pirate);
      })
      .catch(function(err) {
        res.send(err);
      })
  });

router.route('/:id')
// GET '/:id'
  .get((req, res) => {
    knex('pirates').select()
      .where('id', +req.params.id)
      .then(function(pirate) {
        console.log("SUCCESSFUL GET: ", pirate)
        res.send(pirate);
      })
      .catch(function(err) {
        res.send(err);
      })
  })
// PUT '/:id'
  .put((req, res) => {
    knex('pirates').where('id', +req.body.pirate.id)
      .update({name: req.body.pirate.name, poison: req.body.pirate.poison, accessory: req.body.pirate.accessory, image_url: req.body.pirate.image_url}) 
      .returning('*')
      .then(function(updatedPirate) {
        console.log("SUCCESSFUL PUT: ", updatedPirate)
        res.send(updatedPirate);
      })
      .catch(function(err) {
        res.send(err);
      })
  })
// DELETE '/:id'
  .delete((req, res) => {
    knex('pirates').delete().where('id', +req.params.id)
      .then(function() {
        console.log("SUCCESSFUL DELETE");
        res.send('SUCCESSFUL DELETE')
      })
      .catch(function(err) {
        res.send(err)
      })
  })



module.exports = router;