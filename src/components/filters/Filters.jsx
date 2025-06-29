function Filters({
  psearchName,
  psetSearchName,
  phouses,
  pfilterHouse,
  psetFilterHouse,
}) {
  const handleName = (ev) => {
    psetSearchName(ev.target.value);
  };

  const handleHouse = (ev) => {
    psetFilterHouse(ev.target.value);
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <form className="filters" onSubmit={handleFormSubmit}>
        <div className="filters__group">
          <label htmlFor="search">Busca por personaje: </label>
          <input
            id="search"
            type="search"
            value={psearchName}
            onChange={handleName}
          />
        </div>

        <div className="filters__group">
          <label htmlFor="houses">Selecciona la casa: </label>
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
        </div>
      </form>
    </>
  );
}

export default Filters;
