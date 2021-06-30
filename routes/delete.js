const express = require('express');
const router = express.Router();
const Todo = require('../models').Todos;

router.get('/delete/:id', function(req,res){
  // 洗濯されたtodoデータを削除する
  const itemId = req.params.id;
  console.log(itemId);
  Todo.destroy({where:{ id: [itemId]}}).then(todo => {
    console.log(todo);
    res.redirect('/');
  });
})



module.exports = router;