import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import LeftSidebar from "./components/leftSideBar/leftSideBar.js";
let ws;
async function connectToServer() {
  ws = new WebSocket("ws://localhost:3300/ws");
  return new Promise((resolve, reject) => {
    const timer = setInterval(() => {
      if (ws.readyState === 1) {
        clearInterval(timer);
        resolve(ws);
      }
    }, 10);
  });
}

function App() {
  useEffect(() => {
    (async function () {
      const ws = await connectToServer();
      ws.onmessage = (webSocketMessage) => {
        const messageBody = webSocketMessage.data;
        if (messageBody) {
          alert(messageBody);
        } else console.log("error :", webSocketMessage.data);
      };
      ws.send(JSON.stringify({ test: true }));
    })();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="leftSideBar p-1">
        <LeftSidebar />
      </section>
    </div>
  );
}

export default App;
