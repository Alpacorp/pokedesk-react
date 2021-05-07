import React from 'react';
import Searching from './Searching';
import PokemonInfo from './PokemonInfo';
import styled from 'styled-components';

const Details = () => {
    return (
        <PokemonDetails id="details">
            <Searching/>
            <PokemonInfo/>
        </PokemonDetails>
    );
}

const PokemonDetails = styled.div`
    width: 30%;
    position: fixed;
    right: 60px;
    padding: 30px;
    background: #98D7A5;
    border-radius: 10px;
    box-shadow: 0 3px 15px rgb(100 100 100 / 50%);

    @media (max-width: 850px){
        position: unset;
        display: block;
        width: 50%;
        margin: auto;
    }
`

export default Details;
