export default async (io) => {
  io.on("connection", onConnection);
};

function onConnection(socket) {
  console.log(socket.id);

  socket.on("msg-send", (msg) => {
    console.log(msg);
    msg.content = msg.msg;
    socket.broadcast.emit("message", msg);
  });
}
