function Filters({
  psearchName,
  psetSearchName,
  phouses,
  pfilterHouse,
  psetFilterHouse,
}) {
  const handleName = (ev) => {
    ev.preventDefault();
    psetSearchName(ev.target.value);
  };

  const handleHouse = (ev) => {
    ev.preventDefault();
    psetFilterHouse(ev.target.value);
  };
  return (
    <>
      <form>
        <label htmlFor="search">Busca por personaje:</label>
        <input
          id="search"
          type="search"
          value={psearchName}
          onChange={handleName}
        />

        <label htmlFor="houses">Selecciona la casa:</label>
        <select
          name="houses"
          id="houses"
          value={pfilterHouse}
          onChange={handleHouse}
        >
          <option value="">Todas</option>
          {phouses.map((house, index) => (
            <option key={index} value={house}>
              {house}
            </option>
          ))}
        </select>
      </form>
    </>
  );
}

export default Filters;
