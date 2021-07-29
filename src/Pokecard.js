import React from "react";
import "./Pokecard.css"

function Pokecard(pokemon) {
    // console.log(pokemon);
    const { id, name, type, base_experience } = pokemon.pokemon;
    const img_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className="Pokecard">
            <div className="Pokecard-title">
                {name}
            </div>
            <img className="Pokecard-image" src={img_url} alt="" /><br />
            <span className="Pokecard-type">
                Type: {type}
            </span><br />
            <span className="Pokecard-exp">
                EXP: {base_experience}
            </span>
        </div>
    )
}


export default Pokecard;