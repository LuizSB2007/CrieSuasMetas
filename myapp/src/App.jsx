import React, { useState, useEffect } from "react";
import "./App.css";

import { Form } from "./components/Form";
import { MetaArea } from "./components/Metas";

function App() {
  const [metas, setMetas] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("metas2023") === null) {
      localStorage.setItem("metas2023", JSON.stringify([]));
    }
    setMetas(JSON.parse(localStorage.getItem("metas2023")));
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1>Metas para 2023</h1>
      </div>
      <Form setMetas={setMetas} metas={metas} />
      <h2>Suas metas</h2>
      <div className="todasMetas">
        <MetaArea setMetas={setMetas} metas={metas} />
      </div>
    </div>
  );
}

export default App;

