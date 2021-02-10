const MongoClient = require('mongodb').MongoClient;
// const mongo = require('./mongo.js');
const uri = "mongodb+srv://webmaster:NKXNqR88LBEv8y6h@cluster0.tqgec.mongodb.net/webmaster?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true}, { connectTimeoutMS: 30000 }, { keepAlive: 1});
// var Server = require('mongodb').Server;
// var client = new MongoClient(new Server('localhost', 27017));

var db;
const express = require('express');
const app = express();
const path = require('path');
let indexFile = path.join(__dirname, "../public/index.html");
// serve files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

console.log('Server-side code running');
// app.listen(8080, ()=> {
//   console.log("listening on 8080");
//   mongo.db('webmaster').collection('test').insertOne(
//       {
//         name: "test",
//         desc: "fhsdjkahfsdjkhfsjklahs"
//       }
//     );

// })

client.connect(err => {
  db = client.db('webmaster');
  console.log("we are connected!");
  app.listen(8080, () => {
    console.log('listening on 8080');
  });
  // client.db("webmaster").collection("test").insertOne(
  //   {
  //     name: "test",
  //     desc: "fhsdjkahfsdjkhfsjklahs"
  //   }
  // );
});




// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(indexFile);
});

// add a document to the DB collection recording the click event
app.post('/cart', (req, res) => {
  // console.log(db.collection('test'));
  // console.log(req.query.toString() + "afhdjksahfjksdh" + req.body.toString());
  db.collection('test').insertOne(req.body, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('click added to db');
    res.json({requestBody: req.body});
  });
});

// // get the click data from the database
// app.get('/clicks', (req, res) => {
//   db.collection('test').find().toArray((err, result) => {
//     if (err) return console.log(err);
//     res.send(result);
//   });
// });

// function getstock(db, mgclient, item, field){
//   const col = db.collection("stock-list");
//   const myDoc = await col.findOne( { field: { $eq : item}});
//   console.log(myDoc);
//   return myDoc;        
// }

