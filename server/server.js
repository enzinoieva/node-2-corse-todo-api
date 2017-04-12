
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

 var {mongoose} = require('./db/mongoose');
 var {Todo} = require('./models/todo');
 var {User} = require('./models/user');


// save new something


// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc)=>{
//   console.log('Saved todo',doc);
// }, (e)=>{
//   console.log('Unable to save todo')
// });

// var otherTodo = new Todo({
//   text:'Feed the cat',
//   completed:true,
//   completedAt:123
// });

// var otherTodo = new Todo({
//   text:'Somthing to do'// verrà trimmato
// });

// var otherTodo = new Todo({
//   text: 23
// });

// var otherTodo = new Todo({
//   text: true
// });

// otherTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc, undefined, 2));
// },(e)=>{
//   console.log('Unable to save', e);
// });



//User
//email - require it - trim it - set type - set min length of 1

// var user = new User({
//   email:'vincenzo.ieva@tiscali.it  '
// });
//
// user.save().then((doc)=>{
//   console.log('User saved', doc);
// }, (e) =>{
//   console.log('Unable to save user', e);
// });



var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
  //console.log(req.body);
  var todo = new Todo({
    text : req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  }, (e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
      res.send({
        todos:todos,
        my_code : "mio codice"
      });
  }, (e)=>{
    res.status(400).send(e);
  });
});


//GEt /todos/123232

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>{
    return res.status(400).send();
  });
});

app.listen(port, ()=>{
  console.log(`Started on port ${port}`);
});

module.exports = {app};
