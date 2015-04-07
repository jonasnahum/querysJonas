var m = require("jimenez-couchdb-endpoints");

var Query = m.Query;//It provides the mechanism to run queries against existing views
var query = new Query("contribuyentes_users", "contribuyentes", "byusername");//(databaseName, documentName, viewName)
var endPoint = query.getEndPoint({//urlParams.
  startkey: encodeURIComponent('"jonas"'),
  endkey: encodeURIComponent('"jonas"')
});

console.log(endPointgetUrl());//route params + url params.

var factory = new m.PromiseFactory();
var promise = factory.getPromise(endPoint);


promise.then(function(args) {
  var couchRes = args[0], body = JSON.parse(args[1]);

  //console.log(body.rows);
  for (var i = 0; i < body.rows.length; i++) {
    var doc = body.rows[i].value;
    console.log(doc);
  }

});

