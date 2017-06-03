const express = require('express');
const router = express.Router({mergeParams: true});

const Models = require('../models/index');

const Question = Models.Question;
const Answer = Models.Answer;

//Answers#create URL: /questions/:questionId/answers VERB:Post
router.post('/', function (req,res) {
  const questionId = req.params.questionId;

  Answer
    .create({content: req.body.content, QuestionId: questionId})
    .then(function () {res.redirect(`/questions/${questionId}`)});
  //res.send(Object.assign({}, req.body, req.params))
})




module.exports = router;
