// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log("Unable to connect to mongodb server");
  }
  console.log("Connected to MongoDB server");

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'buy lunch'}).then((result) =>{
  //   console.log(result);
  // });
  // db.collection('Users').deleteMany({name: 'Nathan'});

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'buy food'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a7032828747d81de4378aca')
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
