import Filters from "../filters/Filters";
import CharacterList from "../characters/CharacterList";

function Landing({
  psearchName,
  psetSearchName,
  phouses,
  pfilterHouse,
  psetFilterHouse,
  pfilterGender,
  psetFilterGender,
  characters,
}) {
  return (
    <>
      <Filters
        psearchName={psearchName}
        psetSearchName={psetSearchName}
        phouses={phouses}
        pfilterHouse={pfilterHouse}
        psetFilterHouse={psetFilterHouse}
        pfilterGender={pfilterGender}
        psetFilterGender={psetFilterGender}
      />

      {characters.length === 0 ? (
        <p className="no-results">
          No hay ningún personaje que coincida con la palabra "{psearchName}"
        </p>
      ) : (
        <CharacterList characters={characters} />
      )}
    </>
  );
}

export default Landing;
