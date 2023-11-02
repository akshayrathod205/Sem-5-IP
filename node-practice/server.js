const net = require("net");
const server = net.createServer();

server.on("connection", (socket) => {
  console.log("new client connection is made");
  socket.on("data", (data) => {
    console.log(data.toString());
  });
  socket.once("close", () => {
    console.log("Client connection is closed");
  });
  socket.on("error", (err) => {
    console.log("error");
  });
  socket.write("server:Hello connection successfully made<br>");
});

server.on("error", (err) => {
  if (err === "EADDRINUSE") {
    console.log("Address in use");
    setTimeout(() => {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  } else {
    console.log("server failed");
  }
});

server.listen(9000, () => {
  console.log("opened server on %j", server.address().port);
});
