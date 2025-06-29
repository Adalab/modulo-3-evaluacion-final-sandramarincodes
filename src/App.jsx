import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import CharacterList from "./components/characters/CharacterList";
import Filters from "./components/filters/Filters";
import CharacterDetail from "./components/characters/CharacterDetail";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [filterHouse, setFilterHouse] = useState("");
  const [filterGender, setFilterGender] = useState("");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        setAllCharacters(data);
      });
  }, []);

  const houses = [
    ...new Set(
      allCharacters.map((character) => character.house).filter(Boolean)
    ),
  ];

  const filteredCharacters = allCharacters
    .filter((character) =>
      character.name.toLowerCase().includes(searchName.toLowerCase())
    )
    .filter(
      (character) => character.house === filterHouse || filterHouse === ""
    )
    .filter(
      (character) => filterGender === "" || character.gender === filterGender
    );
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Landing
              psearchName={searchName}
              psetSearchName={setSearchName}
              phouses={houses}
              pfilterHouse={filterHouse}
              psetFilterHouse={setFilterHouse}
              pfilterGender={filterGender} 
              psetFilterGender={setFilterGender} 
              characters={filteredCharacters}
            />
          }
        />
        <Route
          path="/detail/:id"
          element={<CharacterDetail pallCharacters={allCharacters} />}
        ></Route>
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;
