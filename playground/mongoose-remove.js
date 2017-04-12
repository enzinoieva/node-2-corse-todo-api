
const {ObjectID} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove

//Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id:'58ee4c8d8d7d95c2ba06a7e0'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('58ee4c8d8d7d95c2ba06a7e0').then((todo) => {
  console.log(todo);
});
