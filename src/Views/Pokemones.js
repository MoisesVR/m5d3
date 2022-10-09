import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPokemon = () => {

    const [characters, setCharacters] = useState([]);
    const [name, setName] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const getApi = async () => {
            const resp = await fetch('https://pokeapi.co/api/v2/pokemon?offset=25&limit=25');
            const data = await resp.json();

            if (data && data.results) {
                const name = data.results.map((result) => ({ name: result.name }))
                setCharacters(name);
            }
        }
        getApi();
    }, [])

    const handleName = (event) => {
        const nameCharacter = event.target.value;
        if (nameCharacter && nameCharacter !== "") {
            setName(nameCharacter);
        }
    }

    const goToCharacter = () => {
        navigate(`/pokemones/${name}`);
    }

    return (
        <div className="containerHome">
            <h1> Selecciona un pokemon </h1>
            <select className="select" onChange={handleName}>
                <option  value=""> Selecciona un Pokemón </option>
                {characters.map((character) => (
                    <option key={character.name} value={character.name}>{character.name}</option>
                ))}
            </select>
            <button className="btn btn-light" onClick={goToCharacter}> Ver detalle </button>
        </div>
    );
}

export default SearchPokemon;

