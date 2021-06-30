const express = require('express');
const router = express.Router();
const Todo = require('../models').Todos;


router.get('/add', function(req, res, next) {
  res.render('add');
});

router.post('/add', function(req, res, next) {
  const title = req.body.title;
  const memo = req.body.memo;
  const limit = new Date(req.body.limit);

  (async ()=>{
    await Todo.create({
      title: title,
      memo: memo,
      limit: limit,
      created_at: new Date(),
      updated_at: new Date()
    }).then(()=>{
      res.redirect('/');
    })
  })()

});

module.exports = router;