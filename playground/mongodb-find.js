
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
   return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');

    //db.collection('Todos').find().toArray().then((docs)=>{
    //db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
    // db.collection('Todos').find({
    //   _id: new ObjectID("58ebaa258d7d95c2ba0612b4")
    // }).toArray().then((docs)=>{
    //   console.log("Todos:");
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //   console.log('Unable to fetch todos', err);
    // });

    //count() --> se non gli viene passata una callback ritornerà una promise
    // db.collection('Todos').find().count().then((count)=>{
    //   console.log(`Todos count: ${count}`);
    //
    // }, (err)=>{
    //   console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name:'Vincenzo'}).toArray().then((docs)=>{
      console.log(JSON.stringify(docs, undefined, 2));
    })

    //db.close();
});
