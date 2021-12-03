const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.rename(
  path.join(__dirname, "test", "test.txt"),
  path.join(__dirname, "test", "helloMano.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed");
  }
);
