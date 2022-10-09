import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Pokemon() {

    const { name } = useParams();

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        const getApi = async () => {
            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await resp.json();
            setCharacter(data)
        }
        getApi();
    }, [])

    return (
        <div className="containerPokemon">
            {character.length <= 0 ? null :
                <div >
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${character.id}.png`} alt="" />
                    <div className="text">
                        <h1> Detalles </h1>
                        <h1> Name: {name}</h1>
                        <p>HP: {character.stats[0].base_stat}</p>
                        <p>attack: {character.stats[1].base_stat}</p>
                        <p>defense: {character.stats[2].base_stat}</p>
                        <p>special-attack: {character.stats[3].base_stat}</p>
                        <p>special-defense: {character.stats[4].base_stat}</p>
                        <p>speed: {character.stats[5].base_stat}</p>
                        <p>{character.types[0].type.name}</p>
                    </div>

                </div>}

        </div>
    );
}