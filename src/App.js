import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Views/Home";
import Pokemones from "./Views/Pokemones";
import Pokemon from "./Views/Pokemon";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element= { < Home />} />
        <Route path="/pokemones" element= { <Pokemones />} />
        <Route path="/pokemones/:name" element= { <Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
