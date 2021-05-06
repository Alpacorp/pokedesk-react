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
                <button onClick={seeMorePokemons}>See 3 +</button>
            </Result>
        );
}

const Result = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 30px;

    & > button {
        background: #0d6efd;
        display: block;
        width: 100%;
        border: none;
        color: #ffffff;
        padding: 10px 50px;
        cursor: pointer;
        border-radius: 5px;

        &:focus {
            outline: 0;
        }
    }
`

export default Results;
