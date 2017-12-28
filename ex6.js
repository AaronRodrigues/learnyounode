 var mymodule = require('./mymodule.js')

 var folder = process.argv[2];
 var ext =  process.argv[3];
mymodule(folder,ext,callback);

function callback(err,data)
{
  if(err){console.log(err)}
  data.forEach(element => {
    console.log(element);
  });

}