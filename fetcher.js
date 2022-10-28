const request = require("request");
const fs = require("fs");
const readline = require("readline");
const args = process.argv.slice(2);
const url = args[0];
const filepath = args[1];

request(`${url}`, (error, response, body) => {
  if (error) {
    console.log(response);
    return;
  } else {
    fs.writeFile(filepath, body, () => {
      const size = body.length;
      console.log(`Downloaded and saved ${size} bytes to ${filepath}`);
    });
  }
});
