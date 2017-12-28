var fs = require('fs');    

function count(){    
  fs.readFile(process.argv[2], function finishedReading(error, buf){
    if (error) return console.error(error);    
    var str = buf.toString();
    str = str.split("\n");
    str = str.length - 1 ;
    console.log(str);
  });
}

count();

//Here's the official solution in case you want to compare notes:



//─────────────────────────────────────────────────────────────────────────────



//    var fs = require('fs')

//    var file = process.argv[2]

    

//    fs.readFile(file, function (err, contents) {

//      if (err) {

//        return console.log(err)

//      }
//      // fs.readFile(file, 'utf8', callback) can also be used

//      var lines = contents.toString().split('\n').length - 1

//      console.log(lines)

//    })
//
