function Filters({ psearchName, psetSearchName }) {
  const handleName = (ev) => {
    ev.preventDefault();
    psetSearchName(ev.target.value);
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
      </form>
    </>
  );
}

export default Filters;
