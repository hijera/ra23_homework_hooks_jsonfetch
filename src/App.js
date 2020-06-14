import React from 'react';
import logo from './logo.svg';
import './App.css';
import Request from "./components/Request";

function App() {
  return (
    <div className="App">
      <Request url={"http://localhost:7070/data"} />
        <Request url={"http://localhost:7070/error"} />
        <Request url={"http://localhost:7070/loading"} />
    </div>
  );
}

export default App;
