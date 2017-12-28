 var mymodule = require('./mymodule.js')

mymodule();
/*
function bar (mymodule) {
       foo(function (err, data, ext) {
         if (err)
           return mymodule(err) // early return

         // ... no error, continue doing cool things with `data`

         // all went well, call callback with `null` for the error argument

          mymodule(null, folder, ext)
         })
  }
*/
