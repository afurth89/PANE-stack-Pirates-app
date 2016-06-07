var express = require('express'),
    router = express.Router(),
    knex = require('../db/knex');

router.get('/', (req, res) => {
  knex('pirates').select()
    .then(function(pirates) {
      res.send(pirates);
    })
    .catch(function(err) {
      res.send(err)
    })
})

// GET '/:id'
// PUT '/:id'
// POST '/'
// DELETE '/:id'

module.exports = router;