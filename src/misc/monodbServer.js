//'use latest';
import bodyParser from 'body-parser';
import express from 'express';
import Webtask from 'webtask-tools';
import { MongoClient } from 'mongodb';
import { ObjectID } from 'mongodb';
const collection = 'business';
const collectionUserInfo = 'userInformation';
const collectionPastExperiences = 'pastExperiences';
const server = express();

server.use(bodyParser.json());

server.get('/:ucid', (req, res, next) => {
 const { MONGO_URL } = req.webtaskContext.secrets;
 MongoClient.connect(MONGO_URL, (err, client) => {
 const { ucid } = req.params ;
 console.log("req params", req.params.ucid);
 var temp = parseInt(req.params.ucid, 10);
 console.log("temp", req.params.ucid);
 if (err) return next(err);
 var db = client.db('taxiapp'); //CHANGE THIS
 db.collection(collection).findOne({ ucid: { $eq: temp } }, (error, result) => {
 if (error) return next(error);
 return res.status(200).send(result);
 });
 return client;
 });
});


server.get('/:_id', (req, res, next) => {
 const { MONGO_URL } = req.webtaskContext.secrets;
 MongoClient.connect(MONGO_URL, (err, client) => {
 const { _id } = req.params ;
 if (err) return next(err);
 console.log("in here!!!");
 var db = client.db('taxiapp'); //CHANGE THIS
 db.collection(collection).findOne({ _id: new ObjectID(_id) }, (error, result) => {
 if (error) return next(error);
 return res.status(200).send(result);
 });
 return client;
 });
});

// server.get('/:_id', (req, res, next) => {
//  const { MONGO_URL } = req.webtaskContext.secrets;
//  MongoClient.connect(MONGO_URL, (err, client) => {
//  const { _id } = req.params ;
//  if (err) return next(err);
//  var db = client.db('taxiapp'); //CHANGE THIS
//  db.collection(collectionPastExperiences).findOne({ _id: new ObjectID(_id) }, (error, result) => {
//  if (error) return next(error);
//  return res.status(200).send(result);
//  });
//  return client;
//  });
// });





server.post('/', (req, res, next) => {
 const { MONGO_URL } = req.webtaskContext.secrets;
 // Do data sanitation here.
 const model = req.body;
 console.log(MONGO_URL);
 MongoClient.connect(MONGO_URL, (err, client) => {
 if (err) return next(err);
 var db = client.db('taxiapp'); //CHANGE THIS  //CHANGE THIS
db.collection(collection).insertOne(model, (error, result) => {
 if (error) return next(error);
 return res.status(201).send(result);
 });
 return client;
 });
});

// For UserInfo
server.post('/userInfo', (req, res, next) => {
 const { MONGO_URL } = req.webtaskContext.secrets;
 // Do data sanitation here.
 const model = req.body;
 console.log(MONGO_URL);
 MongoClient.connect(MONGO_URL, (err, client) => {
 if (err) return next(err);
 var db = client.db('taxiapp'); //CHANGE THIS  //CHANGE THIS
db.collection(collectionUserInfo).insertOne(model, (error, result) => {
 if (error) return next(error);
 return res.status(201).send(result);
 });
 return client;
 });
});
module.exports = Webtask.fromExpress(server);


https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-db-usingID