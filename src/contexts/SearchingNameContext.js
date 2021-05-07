import React, {createContext, useState} from 'react';

const SearchingNameContext = createContext();

const SearchingNameProvider = ({children}) => {

    const [pokemonName, setSearchingName] = useState('');
    const [pokemonType, setPokemonType] = useState('');
    const [pokemonId, setPokemonId] = useState('');
    const [pokemonImage, setPokemonImage] = useState('');
    const [pokemonAbilities, setPokemonAbilities] = useState('');

    const changePokemonName = (pokemonName) => {
        setSearchingName(pokemonName);
    }

    const changePokemonType = (pokemonType) => {
        setPokemonType(pokemonType);
    }

    const changePokemonId = (pokemonId) => {
        setPokemonId(pokemonId);
    }

    const changePokemonImage = (pokemonImage) => {
        setPokemonImage(pokemonImage);
    }

    const changePokemonAbilities = (pokemonAbilities) => {
        setPokemonAbilities(pokemonAbilities);
    }

    return (
        <SearchingNameContext.Provider value={{changePokemonName, changePokemonType, changePokemonId, changePokemonImage, changePokemonAbilities, pokemonName, pokemonType, pokemonId, pokemonImage, pokemonAbilities}}>
            {children}
        </SearchingNameContext.Provider>
    );
}

export { SearchingNameContext, SearchingNameProvider };