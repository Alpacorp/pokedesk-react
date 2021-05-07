import React, {useEffect, useState} from 'react';
import Card from './Card';
import styled from 'styled-components';

const Results = () => {

    let [pagination, setPagination] = useState(6);
    const [pokemons, setPokemons] = useState([]);

    const seeMorePokemons = () => {
        setPagination(pagination = pagination + 6);
    }

    useEffect(() => {
        if (pagination) {
            fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pagination}?&limit=6`)
            .then((res) => {
                return res.json();
            }).then((pokemonList) => {
                setPokemons(pokemonList.results);
            })
        }
    }, [pagination]);

        return (
            <Result>
                <Card pokemons={pokemons}/>
                <button onClick={seeMorePokemons}>See 6 More</button>
            </Result>
        );
}

const Result = styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 30px;

    @media (max-width: 850px){
        width: 100%;
    }

    @media (max-width: 520px){
        justify-content: space-evenly;
    }

    & > button {
        background: #FECB06;
        display: block;
        width: 100%;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
        color: #1767AC;
        font-weight: bold;
        padding: 10px 50px;
        cursor: pointer;
        border-radius: 5px;
        margin: 20px auto;
        border: none;

        &:focus {
            outline: 0;
        }
    }
`

export default Results;
