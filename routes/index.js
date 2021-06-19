
const express = require('express');
const router = express.Router();
const Todo = require('../models').todos;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
  console.log(req.body.title);
  console.log(req.body.memo);
  console.log(req.body.limit);
  console.log(new Date(req.body.limit));

  (async ()=>{
    await Todo.create({
      title: req.body.title,
      memo: req.body.memo,
      status: 0,
      limit_at: new Date(req.body.limit),
      created_at: new Date(),
      updated_at: new Date()
    })
  })()


  console.log(Todo);
  res.redirect('/');
});

module.exports = router;