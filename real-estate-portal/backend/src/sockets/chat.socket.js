import Message from "../models/Message.js";

export const chatSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("Chat user connected:", socket.id);

    socket.on("joinRoom", (room) => {
      socket.join(room);
    });

    socket.on("sendMessage", async (data) => {
      const message = await Message.create(data);
      io.to(data.room).emit("receiveMessage", message);
    });

    socket.on("disconnect", () => {
      console.log("Chat user disconnected:", socket.id);
    });
  });
};
