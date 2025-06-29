import { useParams, Link } from "react-router-dom";

import gryffLogo from "../../assets/gryffindor-houselogo.png";
import slythLogo from "../../assets/slytherin-houselogo.png";
import huffLogo from "../../assets/hufflepuff-houselogo.png";
import ravLogo from "../../assets/ravenclaw-houselogo.png";

const houseLogos = {
  Gryffindor: gryffLogo,
  Slytherin: slythLogo,
  Hufflepuff: huffLogo,
  Ravenclaw: ravLogo,
};

function CharacterDetail({ pallCharacters }) {
  const params = useParams();
  const id = params.id;
  const character = pallCharacters.find((character) => character.id === id);

  return (
    <>
      <section className="detail">
        <Link to="/" className="detail__back">
          ‹ Volver
        </Link>

        <div className="detail__container">
          <img
            className="detail__image"
            src={
              character.image
                ? character.image
                : `https://placehold.co/300x400?text=${encodeURIComponent(
                    character.name
                  )}`
            }
            alt={character.name}
          />

          <article className="detail__card">
            {character.house && houseLogos[character.house] && (
              <img
                className="detail__logo"
                src={houseLogos[character.house]}
                alt={`Escudo de ${character.house}`}
              />
            )}

            <h2 className="detail__name">{character.name}</h2>

            <p>
              <strong>Estatus:</strong>{" "}
              {character.alive
                ? character.gender === "female"
                  ? "Viva 💖"
                  : "Vivo 💙"
                : character.gender === "female"
                ? "Muerta ⚰️"
                : "Muerto ⚰️"}
            </p>

            <p>
              <strong>Especie:</strong> {character.species} 👤
            </p>

            <p>
              <strong>Género:</strong> {character.gender}
            </p>

            <p>
              <strong>Casa:</strong> {character.house || "Desconocida"}
            </p>

            {character.alternate_names?.length > 0 && (
              <p>
                <strong>También conocido/a como:</strong>{" "}
                {character.alternate_names
                  .map((name) => name.trim().replace(/,$/, ""))
                  .join(", ")}
              </p>
            )}
          </article>
        </div>
      </section>
    </>
  );
}

export default CharacterDetail;
