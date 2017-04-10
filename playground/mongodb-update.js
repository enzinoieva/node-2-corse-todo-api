
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
   return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID("58ebaa258d7d95c2ba0612b4")
    // }, {
    //   $set:{
    //     completed: true
    //   }
    // },{
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID("58ebafa18d7d95c2ba0614a7")
    }, {
      $set:{
        name: 'Vincenzo'
      },
      $inc: {
        age:1
      }
    },{
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

    //db.close();
});
