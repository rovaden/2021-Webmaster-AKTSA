const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pagesHosting:AUreD9BtHZY0aWT4@cluster0.tqgec.mongodb.net/webmaster?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const dbName = 'webmaster';
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("we are connected!");
  // perform actions on the collection object

});
