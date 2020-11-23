var fs = require('fs'),
    readline = require('readline');
const path = require('path');

console.log(path.resolve(__dirname, '../src/lagunite.css'));
console.log(process.argv[2])

if (process.argv[2])

    var fileInput = process.argv[2];
else {

    var fileInput = '../src/lagunite.css';
}

//const fileOutput = process.argv[3];

var rd = readline.createInterface({
    input: fs.createReadStream(path.resolve(__dirname, fileInput)),
    output: process.stdout,
    console: false
});

var newItem = 0;


rd.on('line', function (line) {
    console.log(line);

});
