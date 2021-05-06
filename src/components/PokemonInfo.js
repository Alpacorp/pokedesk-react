import React, {useContext} from 'react';
import {SearchingNameContext} from '../contexts/SearchingNameContext';
import styled from 'styled-components';
import { createContext } from 'react';

console.log(SearchingNameContext);

const PokemonInfo = () => {
    const {pokemonName, pokemonType, pokemonId, pokemonImage, pokemonAbilities} = useContext(SearchingNameContext);
    console.log(pokemonImage);
    if (pokemonName && pokemonType && pokemonId && pokemonImage && pokemonAbilities) {

        return (
            <div key={pokemonId}>
                <PokemonImageContainer>
                    <img src={pokemonImage} alt="searchingName"/>
                </PokemonImageContainer>
                <PokemonDescription>
                    <h2 key={pokemonId}>Id: <span>{pokemonId}</span></h2>
                    <h2 key={pokemonName}>Name: <span>{pokemonName}</span></h2>
                    <h2 key={pokemonType}>Type: <span>{pokemonType}</span></h2>
                    {
                        pokemonAbilities.map((singleAbility) =>{
                            return <h2 key={singleAbility.ability.name}>Abilities: <span>{singleAbility.ability.name}</span></h2>
                        })
                    }
                </PokemonDescription>
            </div>
        );
    }else {
        return (
            <ImageContainer>
                <img src="https://assets.thespinoff.co.nz/1/2019/04/HddtBOT.png"/>
            </ImageContainer>
        )
    }
}

const PokemonImageContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    box-shadow: 2px 2px 7px rgba(0,0,0,0.2);
    border-radius: 10px;
    margin-bottom: 30px;
    & > img {
        display: block;
        margin: auto;
        width: 40%;
    }
`

const ImageContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    border-radius: 7px;
    & > img {
        width: 100%;
        border-radius: 7px;
        box-shadow: 2px 2px 7px rgba(0,0,0,0.5);
    }
`

const PokemonDescription = styled.div`
    background: red;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 2px 2px 7px rgba(0,0,0,0.3);
    color: #ffffff;
    & h2 {
        margin-bottom: 7px;
        font-weight: 700;
        font-size: 1.3rem;
    }
    & > h2 > span {
        text-transform: capitalize;
        font-weight: 400;
        margin-left: 7px;
        font-size: 1.3rem;
    }
`

export default PokemonInfo;
