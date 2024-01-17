const fs = require("fs");
const glob = require("glob");
const path = require("path");

let entryCSS = [];

glob.sync("./src/css/**/*.css").forEach((file) => {
  entryCSS.push(`./${ file.replace(/\\/g, '/')}`);
});

let content = entryCSS
  .sort()
  .map((file) => `@import url('${file}');`)
  .join("\n");
  
fs.writeFile("lagunite-dev.css", content, (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("lagunite-dev.css created.");
});
