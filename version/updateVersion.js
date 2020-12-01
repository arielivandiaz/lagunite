// https://github.com/arielivandiaz/auto-commit

var fs = require('fs');

var file_path = 'package.json';

fs.readFile(file_path, 'utf8', function readFileCallback(err, data) {
    if (err) {
        console.log(err);
    } else {
        obj = JSON.parse(data); 
        obj.version += 1;
        json = JSON.stringify(obj); 
        fs.writeFile(file_path, json, 'utf8', () => {
            console.log("Updated version: " +obj.version+"."+obj.rev);
        }); 
    }
});
