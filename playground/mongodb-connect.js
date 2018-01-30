// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log("Unable to connect to mongodb server");
  }
  console.log("Connected to MongoDB server");

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log("Unable to set todo", err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //Insery nre doc into Users(name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Nathan',
  //   age: 21,
  //   location: 'Australia'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to add new user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
