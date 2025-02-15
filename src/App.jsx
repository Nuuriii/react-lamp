import { useState } from "react";
import "./App.css";

function App() {
  // useState
  const [myLamp, setMyLamp] = useState(false);

  const handleOff = () => {
    setMyLamp(!myLamp);
  };

  return (
    <div>
      {/* kalau misal True jadi bg-yellow-500, tapi klaau false jadi Bg-yellow-100 */}
      <div className={` h-10 w-10 bg-yellow-100 rounded-full`}></div>

      <button onClick={handleOff}>{myLamp ? "OFF" : "ON"}</button>
    </div>
  );
}

export default App;
