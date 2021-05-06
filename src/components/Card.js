import React, {useEffect, useState, useContext} from 'react';
import styled from 'styled-components';
import {SearchingNameContext} from '../contexts/SearchingNameContext';

const Card = ({pokemons}) => {

    console.log(SearchingNameContext);

    let {changePokemonName} = useContext(SearchingNameContext);
    let {changePokemonType} = useContext(SearchingNameContext);
    let {changePokemonId} = useContext(SearchingNameContext);
    let {changePokemonImage} = useContext(SearchingNameContext);
    let {changePokemonAbilities} = useContext(SearchingNameContext);

    const [allPokemons, setAllPokemons] = useState([]);
    const [singlePokemon, setSinglePokemon] = useState('');

    useEffect(() => {
        for (let index = 0; index < pokemons.length; index++) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemons[index].name}`)
            .then((res) => {
                return res.json();
            })
            .then((singlePokemonUrl) => {
                setAllPokemons((allPokemons)=> allPokemons.concat(singlePokemonUrl));
                console.log(singlePokemonUrl);
            })
        }
    },[pokemons])
    console.log(allPokemons);
    console.log(singlePokemon);

    const getPokemonClick = (pokemon) => {
        setSinglePokemon(pokemon);
    };

    useEffect(() => {
        if (singlePokemon) {
            changePokemonName(singlePokemon.name);
            changePokemonType(singlePokemon.types[0].type.name);
            changePokemonId(singlePokemon.id);
            changePokemonImage(singlePokemon.sprites.front_default);
            changePokemonAbilities(singlePokemon.abilities);
        }
    }, [singlePokemon])

    return (
        <>
            {
                allPokemons.map((pokemon) => {
                    return (
                        <PokemonCard key={pokemon.name} onClick={()=>getPokemonClick(pokemon)}>
                            <div>
                                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                                <h6>{pokemon.name}</h6>
                            </div>
                        </PokemonCard>
                    )
                })
            }
        </>
    );
}

const PokemonCard = styled.a`
    width: 25%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border: 1px solid #ecf0f1;
    margin-bottom: 20px;
    padding: 10px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
        transition: 0.2s;
        border-radius: 10px;
    }


    & > div > h6 {
        font-size: 1rem;
        text-align: center;
        width: 100%;
        font-weight: 600;
        color: #000000;
    }
`

export default Card;
