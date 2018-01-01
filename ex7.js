var http = require('http');
url = process.argv[2];

http.get(url, function callback (response){
  response.setEncoding("utf8");
  response.on("data", function (data) {
  console.log(data); 
  });  
});

// # PASS Your solution to HTTP CLIENT passed!

//  Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     var http = require('http')
    
//     http.get(process.argv[2], function (response) {
//       response.setEncoding('utf8')
//       response.on('data', console.log)
//       response.on('error', console.error)
//     }).on('error', console.error)