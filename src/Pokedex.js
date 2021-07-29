import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css"

function Pokedex({ pokemon }) {

    return (
        <>
            <h1 className="Pokedex-title">Pokedex: </h1>
            <br />
            {pokemon.map(p => <Pokecard pokemon={p} />)}
        </>
    )
}

export default Pokedex;