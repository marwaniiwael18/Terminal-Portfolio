import React, { useState } from "react";

function TerminalInput({ onCommandSubmit }) {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (input.trim()) {
        onCommandSubmit(input);
        setInput("");
      }
    }
  };

  return (
    <div className="terminal-input">
      <span className="prompt">visitor@terminal.wael.dev:~$</span>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
        placeholder="Type a command (help)"
      />
    </div>
  );
}

export default TerminalInput;