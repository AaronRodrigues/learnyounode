var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var bl = require('bl');

http.get(url1, function (response) {		
	response.on('error', console.error);
	  response.pipe(bl(function (err, data) {
      console.log(data.toString());
      http.get(url2, function (response) {    		
        response.on('error', console.error);
          response.pipe(bl(function (err, data) {
            console.log(data.toString());
            http.get(url3, function (response) {          		
              response.on('error', console.error);
                response.pipe(bl(function (err, data) {
                  console.log(data.toString());	  
                }))
            }); 
          }))
      });	  
    }))
});


// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     var http = require('http')
//     var bl = require('bl')
//     var results = []
//     var count = 0

//     function printResults () {
//       for (var i = 0; i < 3; i++) {
//         console.log(results[i])
//       }
//     }

//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err) {
//             return console.error(err)
//           }

//           results[index] = data.toString()
//           count++

//           if (count === 3) {
//             printResults()
//           }
//         }))
//       })
//     }

//     for (var i = 0; i < 3; i++) {
//       httpGet(i)
//     }

