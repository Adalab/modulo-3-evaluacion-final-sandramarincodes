import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import CharacterCard from "./components/characters/CharacterCard";
import CharacterList from "./components/characters/CharacterList";

function App() {
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        setAllCharacters(data);
      });
  }, []);

  return (
    <>
      <Header />
      <CharacterList characters={allCharacters} />
    </>
  );
}

export default App;
