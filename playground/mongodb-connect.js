//const MongoClient = require('mongodb').MongoClient;
//posso anche scriverlo come:
const {MongoClient, ObjectID} = require('mongodb');


// var user = {
//   name:'vincenzo',
//   age:30
// };
// var {name} = user;
// console.log(name);

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
   return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err,result)=>{
    //     if(err){
    //       return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into Users(name, age, location)

    // db.collection('Users').insertOne({
    //   _id: 123,
    //   name: 'Vincenzo2',
    //   age:30,
    //   location:'Philadelphia'
    // }, (err, result)=>{
    //   if(err){
    //     return console.log('Unable to insert todo', err);
    //   }
    //   //console.log(result.ops);
    //   console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});
