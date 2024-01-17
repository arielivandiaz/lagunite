// https://github.com/arielivandiaz/auto-commit

var fs = require('fs');

const file_path_1 = 'version/version.json';
const file_path_2 = 'package.json';



const myArgs = process.argv.slice(2);


if (fs.existsSync(file_path_1)) {
    fs.readFile(file_path_1, 'utf8', function readFileCallback(err, data) {

        if (err) {
            console.log(err);
        } else {
            let obj = JSON.parse(data);
            let newVersion = obj.version.split(".");

            if (myArgs[0] == 'mv') {//Update mayor version
                newVersion[0] = parseInt(newVersion[0]) + 1;
                newVersion[1] = 0;
                newVersion[2] = 0;
            } else if (myArgs[0] == 'v') {//Update version
                newVersion[1] = parseInt(newVersion[1]) + 1;
                newVersion[2] = 0;
            } else //Update revision
                newVersion[2] = parseInt(newVersion[2]) + 1;
            obj.version = newVersion[0] + "." + newVersion[1] + "." + newVersion[2];
            fs.writeFile(file_path_1, JSON.stringify(obj), 'utf8', () => {
                console.log("Updated version: " + obj.version);
            });
        }
    });
}
if (fs.existsSync(file_path_2)) {
    fs.readFile(file_path_2, 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            let obj = JSON.parse(data);
            let newVersion = obj.version.split(".");
            if (myArgs[0] == 'mv') {//Update mayor version
                newVersion[0] = parseInt(newVersion[0]) + 1;
                newVersion[1] = 0;
                newVersion[2] = 0;
            } else if (myArgs[0] == 'v') {//Update version
                newVersion[1] = parseInt(newVersion[1]) + 1;
                newVersion[2] = 0;
            } else //Update revision
                newVersion[2] = parseInt(newVersion[2]) + 1;
            obj.version = newVersion[0] + "." + newVersion[1] + "." + newVersion[2];            
            fs.writeFile(file_path_2, JSON.stringify(obj), 'utf8', () => {
                console.log("Updated version: " + obj.version);
            });
        }
    });

}



