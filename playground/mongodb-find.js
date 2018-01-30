// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log("Unable to connect to mongodb server");
  }
  console.log("Connected to MongoDB server");

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a7034ce1d68c0142cf6faf7')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch todos", err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count ${count}`);
  // }, (err) => {
  //   console.log("Unable to fetch todos", err);
  // });

  db.collection('Users').find({name: 'Nathan'}).toArray().then((docs) => {
    console.log('Nathan Users:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("whoopsss", err);
  });


  // db.close();
});
