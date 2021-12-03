const path = require('path');

console.log(path.basename(__filename));

console.log(path.basename(__dirname));

console.log(path.dirname(__filename));
console.log(__dirname);
console.log(path.dirname(__dirname));


console.log(path.extname(__filename));

console.log(path.parse(__filename));
console.log(path.parse(__filename).base);
console.log(path.parse(__filename).name);
console.log(path.parse(__filename).ext);

console.log(path.join(__dirname, 'testFolder', 'testDoc.html'));