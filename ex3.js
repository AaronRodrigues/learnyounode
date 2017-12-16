var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
//console.log("File loaded");

var str = buf.toString();
str = str.split("\n");
str = str.length - 1 ;
console.log(str);
