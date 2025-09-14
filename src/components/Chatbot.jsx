import { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../logic/aiLogic';
import { BsChatDotsFill } from 'react-icons/bs'; 
import { IoClose, IoPaperPlane } from 'react-icons/io5';
import '../styles/Chatbot.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "Hi! I'm Pramod's AI assistant. Ask me about his skills, projects, or how to contact him!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const userMessage = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const aiResponseText = getAIResponse(inputValue);
      const aiMessage = { sender: 'ai', text: aiResponseText };
      setMessages(prev => [...prev, aiMessage]);
    }, 700);
  };

  return (
    <div className="chatbot-container">
      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <h3>AI Assistant</h3>
          <button onClick={() => setIsOpen(false)} className="close-chat-btn">&times;</button>
        </div>
        <div className="chat-messages" ref={chatMessagesRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}-message`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <form className="chat-input-form" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask a question..."
            aria-label="Your message"
          />
          <button type="submit" aria-label="Send message"><IoPaperPlane /></button>
        </form>
      </div>

      <button 
        className="chat-toggle-button" 
        onClick={() => setIsOpen(!isOpen)} 
        aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
      >
        <div className="icon-wrapper">
          {isOpen ? <IoClose /> : <BsChatDotsFill />}
        </div>
      </button>
    </div>
  );
}

export default Chatbot;