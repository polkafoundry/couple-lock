var express = require('express')
  , router = express.Router()
  , User = require('../models/user')
  , route = require('../helpers/route')

router.get('/details', (req, res) => {
  route.tryJson(res, User.one, req.query.username);
})

router.get('/all', (req, res) => {
  route.tryJson(res, User.all);
})

module.exports = router