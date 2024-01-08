var express = require('express');
var router = express.Router(); 

var todosCtrl = require('../controllers/todos')

// All actual paths start with "/todos"


//GET /todos
router.get('/', todosCtrl.index)
// GET /todos/new <-- this will need to be moved
router.get('/new', todosCtrl.new)
//GET /todos/:id
router.get('/:id', todosCtrl.show)
//POST TODOS
router.post('/', todosCtrl.create)
// delete /todos/:id
router.delete('/:id', todosCtrl.delete)

module.exports = router;
