var fs = require('fs');

var path = process.argv[2];
var ext = process.argv[3]; 


fs.readdir( path, function callback (err, files){

 for(i=0; i<files.length; i++){
  if(files[i] == ext){
    continue;
  }
  if(files[i].includes(ext)){
     console.log(files[i]); 
  }
 }
});

/* Solution:
 
var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })

*/
  