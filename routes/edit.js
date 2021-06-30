const express = require('express');
const dateFormat = require("dateformat");
const router = express.Router();
const Todo = require('../models').Todos;

router.get('/edit/:id', function(req,res,next){
  //パラメータからidを取得
  let id = req.params.id;

  //DBからidをもとにデータ取得
  Todo.findByPk(id).then(todo => {
    //limit の日付をinputタグで表示するためにフォーマット
    const limitString = dateFormat(todo.limit, "yyyy-mm-dd");
    //DBのデータとフォーマットしたlimitのデータ渡し
    res.render('edit',{todo: todo,limit: limitString,id: id});
  });

});


router.post('/edit/:id', function(req, res, next) {
  let id = req.params.id;
  console.log(id);

  const title = req.body.title;
  const memo = req.body.memo;
  const limit = new Date(req.body.limit);

  (async ()=>{
    await Todo.update(
        { title: title,
          memo: memo,
        limit: limit
      },
      { where:{ id: id }}
      ).then(() => {
        console.log( id + "のデータは更新されました。");
        res.redirect('/');
      })
  })()

});

module.exports = router;