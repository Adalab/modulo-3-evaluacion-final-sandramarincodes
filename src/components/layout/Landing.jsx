import Filters from "../filters/Filters";
import CharacterList from "../characters/CharacterList";

function Landing({
  psearchName,
  psetSearchName,
  phouses,
  pfilterHouse,
  psetFilterHouse,
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
      />
      <CharacterList characters={characters} />
    </>
  );
}

export default Landing;
