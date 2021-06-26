
const express = require('express');
const router = express.Router();
const Todo = require('../models').Todos;

router.get('/', function(req,res){
  // res.send("Todo 一覧を表示予定")
  Todo.findAll({order: [['id','ASC']]}).then(todo => {
    console.log(todo);
    res.render('index',{todo: todo})
  });
})





module.exports = router;