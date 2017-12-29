var mymodule = require('./mymodule.js');

var folder = process.argv[2];
var ext = process.argv[3];

mymodule(folder, ext, callback);

function callback(err, data){
  if (err) return callback(err)
  data.forEach(element => {
    console.log(element);
  });
}

/*
# PASS Your solution to MAKE IT MODULAR passed!

 Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────
 _/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/soluti
 on/solution.js_ :


    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }

      list.forEach(function (file) {
        console.log(file)
      })
    })

─────────────────────────────────────────────────────────────────────────────
 _/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/soluti
 on/solution_filter.js_ :


    var fs = require('fs')
    var path = require('path')

    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }
*/   
