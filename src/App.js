import React from 'react';
import logo from './logo.svg';
import './App.css';

/*

http://websocket.org/echo.html
wss://mt57ra0zm9.execute-api.us-east-1.amazonaws.com/dev
{"message": "test", "action": "message"}

----

const awsSocket = new WebSocket("wss://mt57ra0zm9.execute-api.us-east-1.amazonaws.com/dev");
awsSocket.onopen = () => console.log("Socket opened");
awsSocket.onclose = () => console.log("Socket closed");
awsSocket.onmessage = (event) => console.log(event.data);
awsSocket.onerror = (error) => console.log("Error occured", error);

awsSocket.send(JSON.stringify({"message": "test2", "action": "message"}));

*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
