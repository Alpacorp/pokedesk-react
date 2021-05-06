import React from 'react';
import Searching from './Searching';
import PokemonInfo from './PokemonInfo';
import styled from 'styled-components';

const Details = () => {
    return (
        <PokemonDetails>
            <Searching/>
            <PokemonInfo/>
        </PokemonDetails>
    );
}

const PokemonDetails = styled.div`
    width: 50%;
    padding: 30px;
    border: 1px solid #ecf0f1;
    background: #fafafa;
    border-radius: 10px;
`

export default Details;
