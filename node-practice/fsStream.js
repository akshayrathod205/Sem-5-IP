const fs = require("fs");

const readStream = fs.createReadStream("myFile.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);

readStream.on("end", () => {
  console.log("File read and copied successfully.");
});
