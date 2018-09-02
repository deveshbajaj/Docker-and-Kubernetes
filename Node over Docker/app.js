var request = require('request')
var username = 'jcp'
var password = 'Jcp$1234'

const http = require('http')
var options = {
    host: "localhost",
    port: 8000,
    path: "//log184_tomcat_A1.json",
    method: 'GET',
  };
  
  http.get(options, function(res) {
    var buffers = []
    
    res
      .on('data', function(chunk) {
        buffers.push(chunk)
      })
      .on('end', function() {
        data = JSON.parse(Buffer.concat(buffers).toString())
        console.log(typeof(data));
        for(i=0;i<data["list"][0]["requests"].length;i++)
        {
          console.log(data["list"][0]["requests"][i][1]["hits"]);
        console.log(data["list"][0]["requests"][i][1]["cpuTimeSum"]);
        console.log(data["list"][0]["requests"][i][1]["responseSizesSum"]);
        }
      })
    }).end(); 
