
module.exports = function(folder, ext, callback) {
 var fs = require('fs')
 var path = require('path')


 var data=[];
fs.readdir(folder,  function (err, files) {  
      if (err) return callback(err);
     
        files.forEach(function (file) {
        if (path.extname(file).replace(".","") === ext) {
          data.push(file);
        }
      })
      callback(null, data);
    });

}

