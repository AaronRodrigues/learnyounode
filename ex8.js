var http = require('http');
var url = process.argv[2];
var bl = require('bl');

http.get(process.argv[2], function (response) {
	response.setEncoding("utf8");		
	response.on('error', console.error);
	  response.pipe(bl(function (err, data) {
		  console.log(data.length);
			console.log(data.toString());
	  
    }))

});

// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     var http = require('http')
//     var bl = require('bl')

//     http.get(process.argv[2], function (response) {
//       response.pipe(bl(function (err, data) {
//         if (err) {
//           return console.error(err)
//         }
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//       }))
//     })

