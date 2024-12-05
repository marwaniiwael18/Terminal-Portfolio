import React, { useState, useRef, useEffect } from "react";
import "../styles/Terminal.css";
import commands from "../utils/Commands";

function Terminal() {
  const [output, setOutput] = useState([
    "Welcome to Wael Marwani's Interactive Portfolio Terminal",
    "Type 'help' to see available commands",
  ]);
  const [input, setInput] = useState("");
  const outputRef = useRef(null);

  useEffect(() => {
    // Automatically scroll to the bottom of output
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (command) => {
    const [cmd, ...args] = command.trim().toLowerCase().split(" ");
    let commandOutput = "";
    if (commands[cmd]) {
      if (cmd === "clear") {
        setOutput([
          "Welcome to Wael Marwani's Interactive Portfolio Terminal",
          "Type 'help' to see available commands",
        ]);
        setInput("");
        return;
      }
      commandOutput = commands[cmd](args);
    } else {
      commandOutput = `Command not found: ${cmd}. Type 'help' for assistance.`;
    }

    setOutput((prev) => [...prev, `visitor@terminal.wael.dev:~$ ${command}`, commandOutput]);
    setInput("");
  };

  return (
    <div className="terminal-full-screen">
      <div className="terminal-header">
        <pre>
          {`
  ___ )                                                     ( ___ )
 |   |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|   | 
 |   |        __      __  _____  ___________.____            |   | 
 |   |       /  \    /  \/  _  \ \_   _____/|    |           |   | 
 |   |       \   \/\/   /  /_\  \ |    __)_ |    |           |   | 
 |   |        \        /    |    \|        \|    |___        |   | 
 |   |         \__/\  /\____|__  /_______  /|_______ \       |   | 
 |   |              \/         \/        \/         \/       |   | 
 |___|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|___| 
(_____)                                                     (_____)

Welcome to my Portfolio 💚
----
{ NextJS - ThreeJS - Angular - Spring Boot - ExpressJs - MySQL - MongoDB }
----
Check My Repo for more Projects ⭐ GitHub repo ⭐.
----
For a list of available commands, type \`help\`.

          `}
        </pre>
      </div>

      <div className="terminal-output" ref={outputRef}>
        {output.map((line, index) => (
          <div key={index} className="output-line">
            {line}
          </div>
        ))}
      </div>

      <div className="terminal-input">
        <span className="prompt">visitor@terminal.wael.dev:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (input.trim()) {
                handleCommand(input);
              }
            }
          }}
          autoFocus
          placeholder="Type a command (help)"
        />
      </div>

      <div className="terminal-footer">
        <p>© 2024 Wael Marwani. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Terminal;
