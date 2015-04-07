var TempView = require('jimenez-couchdb-endpoints').TempView;//It help us to create temporary couchdb views for queries to a given documents collection
var PromiseFactory = require('jimenez-couchdb-endpoints').PromiseFactory;

var databaseName = "books";
var view = new TempView(databaseName);
var mapFunction = function(doc) { if (doc.authors) emit(doc.authors.join(","), doc.pages); };
var reduce = "_sum";
var group = true;
var endPoint = view.getEndPoint(mapFunction, reduce, group);
// console.dir(endPoint);

var factory = new PromiseFactory(); 
var promise = factory.getPromise(endPoint);
promise.then(function(args){
  //console.dir(args);
  var body = args[1];
  console.dir(body);                
});
promise.fail(function(err, couchRes, body){
  console.log(err);
});
