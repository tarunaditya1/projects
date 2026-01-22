export default function ChatBox({ messages }) {
  return (
    <div className="border p-3" style={{ height: 300, overflowY: "scroll" }}>
      {messages.map((msg, i) => (
        <div key={i}>
          <b>{msg.sender}:</b> {msg.text}
        </div>
      ))}
    </div>
  );
}
