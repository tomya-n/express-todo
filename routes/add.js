const express = require('express');
const router = express.Router();
const Todo = require('../models').Todos;


router.get('/add', function(req, res, next) {
  res.render('add');
});

router.post('/add', function(req, res, next) {
  console.log(req.body.title);
  console.log(req.body.memo);
  console.log(new Date(req.body.limit));

  (async ()=>{
    await Todo.create({
      title: req.body.title,
      memo: req.body.memo,
      limit: new Date(req.body.limit),
      created_at: new Date(),
      updated_at: new Date()
    })
  })()

  res.redirect('/add');
});

module.exports = router;