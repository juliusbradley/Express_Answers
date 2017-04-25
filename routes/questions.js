const express = require('express');
const router = express.Router();

const Question = require('../models/index').Question;
//destructuring, its a shortcut for the above
//const {Question} = require('../models/index');

router.get('/', function (request, response, next) {
  Question
    .findAll()
    .then(function (questions){
      response.send(questions);
    });
})

module.exports = router;
