import React, { useState, useEffect } from "react";
import axios from "axios";
import "katex/dist/katex.min.css";
import katex from "katex";
import './pages.css/Chatpage.css';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  // Функция для обработки текста и отображения кода
  const parseText = (text: string) => {
    // Ищем текст, заключенный в обратные кавычки ‘’’
    const codeRegex = /```(.*?)```/gs;
    return text.split(codeRegex).map((part, index) => {
      // Если это часть кода, возвращаем в <code>
      if (index % 2 !== 0) {
        return <pre key={index} className="code-block">{part}</pre>;
      }
      // Иначе возвращаем обычный текст
      return part;
    });
  };

  // Обновление LaTeX в сообщениях
  useEffect(() => {
    const chatBox = document.getElementById("chat-box");
    if (chatBox) {
      // Находим все элементы с LaTeX и рендерим их
      const latexElements = chatBox.querySelectorAll(".latex");

      latexElements.forEach((el) => {
        const latex = el.innerHTML;
        if (latex) {
          // Приводим el к типу HTMLElement
          katex.render(latex, el as HTMLElement, {
            throwOnError: false,
          });
        }
      });
    }
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post("http://localhost:5000/api/chat", { message: input });
      const gptMessage = { sender: "gpt", text: response.data.reply };
      setMessages((prev) => [...prev, gptMessage]);
    } catch (err) {
      console.error("Ошибка при отправке сообщения:", err);
    }

    setInput("");
  };

  return (
    <div className="chat-container">
      <div id="chat-box" className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            <strong>{msg.sender === "user" ? "Вы:" : "GPT:"}</strong>
            <span className={msg.text.includes("$") ? "latex" : ""}>
              {parseText(msg.text)}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="chat-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введите сообщение..."
        />
        <button type="submit">Отправить</button>
      </form>
      <button 
        className="history-button"
        onClick={() => {
          console.log('История чата будет здесь');
        }}
      >
        История
      </button>
    </div>
  );
};

export { Chat };