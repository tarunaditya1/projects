export const notificationSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("Notification user connected:", socket.id);

    socket.on("joinNotificationRoom", (userId) => {
      socket.join(userId);
    });

    socket.on("sendNotification", (data) => {
      io.to(data.userId).emit("receiveNotification", data);
    });

    socket.on("disconnect", () => {
      console.log("Notification user disconnected");
    });
  });
};
