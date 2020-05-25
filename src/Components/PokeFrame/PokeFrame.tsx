import React, { useEffect, useState } from 'react';
import api from './../../Services/api';
import Loadinggif from '../../Assets/200.gif';
import Card from './PokeFrame_styles';

export default function PokeFrame(props: any): any {
    const [pokemon, getPokemon] = useState<any>([]);
    const [pokemonSprites, getSprite] = useState<any>([]);
    const [loading, setLoad] = useState<boolean>(true);
    const [pokemonColor, setColor] = useState<any>([]);

    useEffect(() => {
        api.get<any>(`${props.pokemonUrl}`).then((response) => {
            getPokemon(response.data);
            getSprite(response.data.sprites);
            setLoad(false);
        });
    }, []);

    const listenLoading: any = () => {
        if (loading === true) {
            return Loadinggif;
        } else {
            return pokemonSprites.front_default;
        }
    };

    return (
        <>
            <Card>
                <div>
                    <h3>{pokemon.name}</h3>
                    <p>Altura: {pokemon.height}</p>
                    <p>Peso: {pokemon.weight}</p>
                </div>
                <img src={listenLoading()} alt="pokemon sprite" />
            </Card>
        </>
    );
}
