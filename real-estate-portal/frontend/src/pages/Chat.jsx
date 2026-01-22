import ChatBox from "../components/chat/ChatBox";

export default function Chat() {
  const messages = [
    { sender: "Agent", text: "Hello!" },
    { sender: "User", text: "Interested in property" }
  ];

  return (
    <div className="container mt-4">
      <h3>Chat</h3>
      <ChatBox messages={messages} />
    </div>
  );
}
