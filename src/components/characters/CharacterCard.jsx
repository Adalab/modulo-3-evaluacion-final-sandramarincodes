function CharacterCard({ character }) {
  const imageProfile =
    character.image !== ""
      ? character.image
      : `https://placehold.co/161x227?text=${encodeURIComponent(
          character.name
        )}`;

  return (
    <>
      <div>
        <img src={imageProfile} />
        <h2>{character.name}</h2>
        <p>{character.species}</p>
      </div>
    </>
  );
}

export default CharacterCard;
