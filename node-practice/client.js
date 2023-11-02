const net = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = net.createConnection({ port: 9000 }, () => {
  console.log("CLIENT: I connected to the server.");
  client.write("CLIENT: Hello this is client!");
});

client.on("data", (data) => {
  console.log(data.toString());
  //client.end();
});

client.on("end", () => {
  console.log("CLIENT: I disconnected from the server.");
});

rl.on("line", (input) => {
  client.write(`CLIENT: ${input}`);
});
