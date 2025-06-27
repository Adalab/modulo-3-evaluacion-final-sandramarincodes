import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import CharacterCard from "./components/characters/CharacterCard";
import CharacterList from "./components/characters/CharacterList";
import Filters from "./components/filters/Filters";

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        setAllCharacters(data);
      });
  }, []);

  const filteredCharacters = allCharacters.filter((character) =>
    character.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <>
      <Header />
      <Filters psearchName={searchName} psetSearchName={setSearchName} />
      <CharacterList characters={filteredCharacters} />
    </>
  );
}

export default App;
