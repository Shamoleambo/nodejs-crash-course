const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("Folder created");
});

fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello test!",
  (err) => {
    if (err) throw err;
    console.log("File created");

    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      " manoooo",
      (err) => {
        if (err) throw err;
        console.log("Text appended");
      }
    );
  }
);
