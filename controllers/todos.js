const Todo = require('../models/todo');

module.exports = {
  index,
  show,
  new: newTodo, //have to do this as new is a javascript word
  create,
  delete: deleteTodo
};

function deleteTodo(req, res){
  Todo.deleteOne(req.params.id)
  res.redirect('/todos')
}

function create(req, res){
  console.log(req.body);
  //models are responsible for CRUDing the data
  Todo.create(req.body)
  //always do a redirect when data has changed
  res.redirect('/todos')
}

function newTodo(req, res){
  res.render('todos/new', {
    title: 'New Todo'
  })
}

function show(req, res){
    res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    title: 'To-Do Details' 
  })
}

function index(req, res) {
  console.log(req.query)
    res.render('todos/index', {
      todos: Todo.getAll(),
      title: 'All To-Dos'
    });
  }

