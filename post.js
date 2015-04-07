var modulo = require("jimenez-couchdb-endpoints");
var Database = modulo.Database;
var databaseName = "contribuyentes_users";
var db = new Database (databaseName);
var model = { 
  username: 'panfilons',
  provider: 'contribuyentesWeb',
  email: 'exito@gmail.com',
  password: 'exito'
 }            
var saveEndPoint = db.save(model);

var factory = new modulo.PromiseFactory();
var promise = factory.getPromise(saveEndPoint);

promise.then(function(args) {
  var couchRes = args[0], body = JSON.parse(args[1]);

  //console.log(body.rows);
  for (var i = 0; i < body.rows.length; i++) {
    var doc = body.rows[i].value;
    console.log(doc);
  }

});


