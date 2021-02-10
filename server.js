const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://webmaster:NKXNqR88LBEv8y6h@cluster0.tqgec.mongodb.net/webmaster?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true}, { connectTimeoutMS: 30000 }, { keepAlive: 1});
var db;
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;
let indexFile = path.join(__dirname, "../public/index.html");

// serve files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

console.log('Server-side code running');

client.connect(err => {
  db = client.db('webmaster');
  console.log("we are connected!");
  app.listen(PORT, '0.0.0.0',  () => {
    console.log('listening on :' + PORT);
  });
});

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(indexFile);
});

// add a document to the DB collection recording the cart checkout event
app.post('/cart', (req, res) => {
  db.collection('carts').insertOne(req.body, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('cart added to db');
    res.json({requestBody: req.body});
  });
});
