import React, {useEffect, useState, useContext} from 'react';
import styled from 'styled-components';
import {SearchingNameContext} from '../contexts/SearchingNameContext';

const Card = ({pokemons}) => {

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
            })
        }
    },[pokemons])

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
                        <PokemonCard key={pokemon.name} onClick={()=>getPokemonClick(pokemon)} href="#details">
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
    width: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #ecf0f1;
    border-radius: 10px;
    box-shadow: 0 3px 15px rgb(100 100 100 / 50%);
    margin: 5px;
    background-color: rgb(222, 253, 224);
    
    cursor: pointer;
    text-decoration: none;

    &:hover {
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
        transition: 0.2s;
        border-radius: 10px;
    }

    & > div {
        padding: 20px;
    }

    & > div > h6 {
        font-size: 1rem;
        text-align: center;
        width: 100%;
        color: #585757;
        margin: 5px auto;
    }

    & > div > img {
        background-color: #fff;
        border-radius: 50%;
    }
    @media (max-width: 520px){
        & > div > img {
            background-color: #fff;
            border-radius: 50%;
            width: 50px;
        }
        & > div > h6 {
            font-size: 0.5rem;
        }
    }
`

export default Card;
