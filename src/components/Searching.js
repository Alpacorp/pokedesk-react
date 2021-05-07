import React, {useEffect, useState, useContext} from 'react';
import styled from 'styled-components';
import {SearchingNameContext} from '../contexts/SearchingNameContext';
import Error from './Error';


const Searching = () => {

    const [inputValue, setInputValue] = useState('');
    const [btnClick, setBtnClick] = useState(false);
    const [fullInputValue, setFullInputValue] = useState('');
    const [pokemon, setPokemon] = useState('');

    const {changePokemonName, changePokemonType, changePokemonId, changePokemonImage, changePokemonAbilities} = useContext(SearchingNameContext);

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        setBtnClick(true);
        setFullInputValue(inputValue);
    }

    console.log(fullInputValue);
    console.log(inputValue);
    console.log(pokemon);

    useEffect(() => {
        if (btnClick === true && fullInputValue) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${fullInputValue}`)
            .then((res) =>{
                return res.json();
            })
            .then((singlePokemon) =>{
                setPokemon(singlePokemon)
            })
        }
    }, [btnClick, fullInputValue]);

    useEffect(() => {
        if (pokemon && btnClick === true && fullInputValue) {
            // setInputValue('');
            setBtnClick(false);
            setPokemon('');
            return (
                changePokemonName(pokemon.name),
                changePokemonType(pokemon.types[0].type.name),
                changePokemonId(pokemon.id),
                changePokemonImage(pokemon.sprites.front_default),
                changePokemonAbilities(pokemon.abilities)
            )
        }
    }, [pokemon, btnClick, fullInputValue, changePokemonAbilities, changePokemonId, changePokemonImage, changePokemonName, changePokemonType]);

    return (
        <div>
            <SearchingPokemons>
                <PokemonInput
                    onChange={handleInputValue}
                    value={inputValue}
                    placeholder="Search"
                    type="text"
                />
                <PokemonBtn onClick={handleClick}>Search</PokemonBtn>
            </SearchingPokemons>
            {
                btnClick && !pokemon && fullInputValue && <Error/>
            }
        </div>
    );
}

const SearchingPokemons = styled.form`
    display: flex;
`
const PokemonInput = styled.input`
    width: 95%;
    padding: 8px;
    border-radius: 5px 0px 0px 5px;
    border: 2px solid #ecf0f1;
    border-right: none;
    &:focus {
        outline: none;
    }
`

const PokemonBtn = styled.button`
    background: #97b3e6;
    cursor: pointer;
    border: none;
    width: 30%;
    color: #ffffff;
    border-radius: 0px 5px 5px 0px;
    &:focus {
        outline: none;
    }
    @media (max-width: 520px){
        font-size: 10px;
    }
`

export default Searching;
