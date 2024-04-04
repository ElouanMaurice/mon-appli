var express = require('express');
var router = express.Router();
// DO NOT EDIT OVER THIS LINE //

const Todo = require('../models/todos')

// ROUTE GET /todos
//EXEMPLE DE RÉPONSE :
// {
 // "todos" = [
 //   {"title": "Aller faire les courses", "priority": 2},
   // {"title": "Faire mes flashcards", "priority": 1},
    //{"title": "Faire une sieste", "priority": 3}
 // ]
// }
router.get('/todos', (req, res) => {
    Todo.find().then(data => {
        res.json({ todos: data });
    })
})


router.post('/todos', (req, res) => {
    const newTodo = new Todo ({
        title: req.body.title,
        priority: req.body.priority,
    })
    newTodo.save().then(()=> {
        res.json({ result: true, todosList: newTodo });
    });


})


// ROUTE POST /todos
//EXEMPLE DE RÉPONSE :
// {
//   "result": true
// }

// DO NOT EDIT UNDER THIS LINE //
module.exports = router;
