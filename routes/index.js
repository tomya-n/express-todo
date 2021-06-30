
const express = require('express');
const router = express.Router();
const Todo = require('../models').Todos;

router.get('/', function(req,res){
  // todoデータ一覧を表示する
  Todo.findAll({order: [['id','ASC']]}).then(todo => {
    // console.log(todo);
    res.render('index',{todo: todo})
  });
})



module.exports = router;