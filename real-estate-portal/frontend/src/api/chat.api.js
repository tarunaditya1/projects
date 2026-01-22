import API from "./axios";

export const getMessages = (roomId) => API.get(`/chat/${roomId}`);
export const sendMessage = (data) => API.post("/chat/send", data);
