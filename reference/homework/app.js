const Logger = require("./Logger");
const fs = require("fs");
const path = require("path");

const logger = new Logger();

logger.on("message", (data) => {
  fs.writeFile(path.join(__dirname, "result", "result.json"), data, (err) => {
    if (err) throw err;
    console.log("File written");
  });
});

logger.log('mano');
