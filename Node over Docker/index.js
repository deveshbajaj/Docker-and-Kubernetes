

//Load express module with `require` directive
var express = require('express')
var fs = require('fs')

var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  //res.send('Hello World!')
  fs.readFile('index.html', 'utf8', function(err, text){
    res.send(text);
});
})

//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})


