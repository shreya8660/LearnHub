import React, { useState } from "react";

function Chatbox() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi 👋 How can I help you?", sender: "bot" }
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessages = [
      ...messages,
      { text: message, sender: "user" },
      { text: "Thanks for your message! We'll assist you soon 😊", sender: "bot" }
    ];

    setMessages(newMessages);
    setMessage("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-[#39FF14] text-black p-4 rounded-full shadow-lg hover:scale-110 transition hover:bg-[#0B0B0B]"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden">

          {/* Header */}
          <div className="bg-[#39FF14] text-black font-semibold p-3">
            Help Chat
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-64">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-sm max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-black text-white ml-auto"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex border-t">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type message..."
              className="flex-1 px-3 py-2 text-sm outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-[#39FF14] px-4 font-semibold hover:bg-[#0B0B0B] hover:text-[white]"
            >
              Send
            </button>
          </div>

        </div>
      )}
    </>
  );
}

export default Chatbox;
