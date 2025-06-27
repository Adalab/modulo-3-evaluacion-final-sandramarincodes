function CharacterCard({ character }) {
  const imageProfile =
    character.image !== ""
      ? character.image
      : "https://placehold.co/161x227?text=No+image";

  return (
    <>
      <div className="card">
        <img className="card__image" src={imageProfile} />
        <h2>{character.name}</h2>
        <p>{character.species}</p>
      </div>
    </>
  );
}

export default CharacterCard;
