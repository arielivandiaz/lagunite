// https://github.com/arielivandiaz/auto-commit

var fs = require('fs');

var file_path = 'package.json';

fs.readFile(file_path, 'utf8', function readFileCallback(err, data) {
    if (err) {
        console.log(err);
    } else {
        obj = JSON.parse(data);
        var newVersion = obj.version.split(".");
        newVersion[newVersion.length - 1] = parseInt(newVersion[newVersion.length - 1]) + 1;
        var str = newVersion[0] + "." + newVersion[1] + "." + newVersion[2];
        obj.version = str;
        json = JSON.stringify(obj);
        fs.writeFile(file_path, json, 'utf8', () => {
            console.log("Updated version: " + obj.version);
        });
    }
});
