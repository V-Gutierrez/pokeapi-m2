import React, { useEffect, useState } from 'react';
import api from './../../Services/api';

export default function PokeFrame(props: any): any {
    const [pokemon, getPokemon] = useState<any>([]);
    const [pokemonSprites, getSprite] = useState<any>([]);

    useEffect(() => {
        api.get<any>(`${props.pokemonUrl}`).then((response) => {
            getPokemon(response.data);
            getSprite(response.data.sprites);
            console.log(response.data.sprites);
        });
    }, []);

    return (
        <>
            <div>
                <h3>{pokemon.name}</h3>
                <img src={pokemonSprites.front_default} alt="pokemon sprite" />
                <img src={pokemonSprites.back_default} alt="pokemon sprite" />
                <img src={pokemonSprites.back_shiny} alt="pokemon sprite" />
                <img src={pokemonSprites.back_default} alt="pokemon sprite" />
            </div>
        </>
    );
}
