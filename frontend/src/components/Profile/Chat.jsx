import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const suggestedQuestions = [
  "Hi",
  "Where is my order?",
  "I want to return my order",
  "Where is your office?",
  "How long does delivery take?",
  "Do you offer refunds?",
];

const ChatUI = () => {
  const [chatMessage, setChatMessage] = useState([
    {
      sender: "bot",
      text: "Welcome to TekVibe Support! How can we help you today?",
    },
  ]);
  const [inputVal, setInputVal] = useState("");

  //  This function send a message to backend
  async function messageSend() {
    const reqAndRes = [{ sender: "user", text: inputVal }];

    try {
      let response = await fetch("http://localhost:3000/user/chatMsgSend", {
        method: "POST",
        headers: {
          authorization: `bearer ${window.localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputVal }),
      });
      let resData = await response.json();

      if (response.status !== 200) throw new Error(resData.message);

      // reqAndRes.push({sender : 'bot', text : resData.data})
      // setChatMessage(...chatMessage, reqAndRes)
      setInputVal(""); // input state
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="w-full max-w-xl mx-35 bg-white rounded-2xl shadow-lg flex flex-col min-h-[85vh]">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-blue-600 rounded-t-2xl">
        <h2 className="text-white text-xl font-semibold">TekVibe Support</h2>
      </div>

      {/* Chat Body */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        <ul>
          {chatMessage.map((chat, index) => {
            return (
              <li
                key={index}
                className={`w-[300px] text-gray-800 text-sm  py-2 px-4 rounded-xl mt-4
                ${
                  chat.sender === "bot" ? "bg-gray-200" : "bg-blue-100 ml-auto"
                }`}
              >
                {chat.text}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Suggested Questions */}
      <div className="px-6 py-2 border-t border-gray-200 bg-gray-50 flex flex-wrap gap-2">
        {suggestedQuestions.map((q, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition"
            onClick={() => setInputVal(q)}
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div className="px-4 py-3 border-t border-gray-200 bg-white flex items-center gap-2">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && messageSend()}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border rounded-full outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          onClick={messageSend}
        >
          <FaPaperPlane size={16} />
        </button>
      </div>
    </div>
    // </div>
  );
};

export default ChatUI;
