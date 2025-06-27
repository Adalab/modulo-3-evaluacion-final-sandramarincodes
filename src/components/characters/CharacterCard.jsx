import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  const imageProfile =
    character.image !== ""
      ? character.image
      : "https://placehold.co/161x227?text=No+image";

  return (
    <Link to={`/detail/${character.id}`}>
      <div className="card">
        <img className="card__image" src={imageProfile} />
        <h2>{character.name}</h2>
        <p>{character.species}</p>
      </div>
    </Link>
  );
}

export default CharacterCard;
