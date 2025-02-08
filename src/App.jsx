import { useState } from "react";
import "./App.css";

function App() {
  // useState
  const [myLamp, setMyLamp] = useState(false);

  const handleOn = () => {
    setMyName("Selamat Puasa guyssss");
  };

  const handleOff = () => {
    setMyName("Selamat Puasa guyssss");
  };

  return (
    <div>
      <h1>{myLamp === true ? "Hidup" : "Mati"}</h1>
      <button onClick={handleOff}>Matikan</button>
      <button onClick={handleOn}>Menghidupkan</button>
    </div>
  );
}

export default App;
