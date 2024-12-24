import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Gamepage from "./components/Gamepage";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggle = () => {
    setIsGameStarted(!isGameStarted);
  };

  return <>{isGameStarted ? <Gamepage /> : <Home toggle={toggle} />}</>;
}

export default App;
