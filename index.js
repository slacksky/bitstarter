var fs = require('fs');
var express = require('express')
var app = express()
//buf = new Buffer(27);
app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))


//fs.readFile('index.html', function (err, data) {
//  if (err) throw err;
//  console.log(data.toString('utf8',0,27));
//});


app.get('/', function(request, response) {
  fs.readFile('index.html', function (err, data) {
    if (err) throw err;
     response.send(data.toString('utf8',0,27))
  //console.log(data.toString('utf8',0,27));
  });
  //response.send(data.toString('utf8',0,27))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
