const { Readable } = require("stream");

const readableStream = new Readable({
  read() {
    this.push("Hello, ");
    this.push("Node.js!");
    this.push(null); // Signals the end of the stream
  },
});

readableStream.on("data", (chunk) => {
  console.log(chunk.toString());
});
