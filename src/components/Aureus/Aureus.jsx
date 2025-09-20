import React, { useState } from "react";
import "./Aureus.css";

export default function Aureus() {
  const [activeView, setActiveView] = useState("chat"); // padrão: chat
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "Você", text: input }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "Aureus IA", text: "Estou processando sua solicitação..." }
      ]);
    }, 500);

    setInput("");
  };

  return (
    <div className="aureusthumb">
      {/* HUB lateral */}
      <div className="hub">
        <h2>Aureus Hub</h2>
        <ul>
          <li onClick={() => setActiveView("chat")}>IA Assistente</li>
          <li onClick={() => setActiveView("tables")}>Analisar Tabelas</li>
          <li onClick={() => setActiveView("charts")}>Gráficos</li>
          <li onClick={() => setActiveView("market")}>Mercado</li>
          <li onClick={() => setActiveView("calculator")}>Calculadora Financeira</li>
        </ul>
      </div>

      {/* Painel Dinâmico */}
      <div className="chat">
        {activeView === "chat" && (
          <>
            <div className="messages">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`message ${msg.sender === "Você" ? "user" : "ia"}`}
                >
                  <strong>{msg.sender}: </strong> {msg.text}
                </div>
              ))}
            </div>

            <div className="chat-input">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={handleSend}>Enviar</button>
            </div>
          </>
        )}

        {activeView === "tables" && (
          <div className="panel">
            <h3>📊 Análise de Tabelas</h3>
            <p>Aqui você verá tabelas financeiras processadas pela IA.</p>
          </div>
        )}

        {activeView === "charts" && (
          <div className="panel">
            <h3>📈 Gráficos Financeiros</h3>
            <p>Aqui entram os gráficos de evolução dos investimentos.</p>
          </div>
        )}

        {activeView === "market" && (
          <div className="panel">
            <h3>🌎 Mercado em Tempo Real</h3>
            <p>Aqui você acompanha cotações e tendências de ativos.</p>
          </div>
        )}

        {activeView === "calculator" && (
          <div className="panel">
            <h3>🧮 Calculadora Financeira</h3>
            <p>Simule metas e rendimentos personalizados.</p>
          </div>
        )}
      </div>
    </div>
  );
}
