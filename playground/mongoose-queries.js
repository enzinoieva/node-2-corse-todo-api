
const {ObjectID} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

// var id = '58ede5fc5f7366b60cde50ca'; //id corretto
// var id = '58ede5fc5f7366b60cde50ca11'; // id non corretto (con due cifre in piu)
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }


// Todo.find({
//   _id:id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('58ec900cf677a0d4070c857e').then((user) => {
  if(!user){
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user,undefined, 2));
}, (e) =>{
  console.log(e);
});
