const express = require('express')
const app = express();
var MongoConnection = '';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://SchoolERP:sample@cluster0.eixgz.mongodb.net/Sample_DAtabase?retryWrites=true&w=majority";

//const uuidv1 = require('uuid');
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    res.header("Access-Control-Max-Age", "3600");
    next();
})

app.listen(3310)
MongoClient.connect(url, { useNewUrlParser: false }, function (err, client) {
    console.log(client, "clent");
    console.log(err, "err");
    MongoConnection = client; 
});

app.get('/', function (req, res) {
    var collection = MongoConnection.db().collection('Student_Details');
    collection.find({}).toArray((err, docs) => {
        console.log(err);
        console.log("Found the following records");
        console.log(docs)
    })
    res.send('Hello World')
})