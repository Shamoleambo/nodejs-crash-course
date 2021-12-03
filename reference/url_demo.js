const url = require("url");

const myUrl = new URL(
  "https://mywebsite.com:8000/hello.html?id=100&status=active"
);

console.log(myUrl.href);
console.log(myUrl.toString());

console.log(myUrl.host);
console.log(myUrl.hostname);

console.log(myUrl.pathname);

console.log(myUrl.search);

console.log(myUrl.searchParams);

myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);
console.log(myUrl.search);

myUrl.searchParams.forEach((value, name) =>
  console.log(`mano => ${name}: ${value}`)
);
