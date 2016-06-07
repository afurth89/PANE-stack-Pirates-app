var express = require('express'),
    router = express.Router(),
    knex = require('../db/knex');

router.route('/')
  .get((req, res) => {
    knex('pirates').select()
      .then(function(pirates) {
        res.send(pirates);
      })
      .catch(function(err) {
        res.send(err);
      })
  })
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
  })

// GET '/:id'
// PUT '/:id'
// POST '/'
// DELETE '/:id'

module.exports = router;