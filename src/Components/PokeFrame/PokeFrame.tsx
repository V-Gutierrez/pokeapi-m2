import React, { useEffect, useState } from 'react';
import api from './../../Services/api';
import Loadinggif from '../../Assets/200.gif';
import Card from './PokeFrame_styles';

export default function PokeFrame(props: any): any {
    const [pokemon, getPokemon] = useState<any>([]);
    const [pokemonSprites, getSprite] = useState<any>([]);
    const [loading, setLoad] = useState<boolean>(true);

    useEffect(() => {
        api.get<any>(`${props.pokemonUrl}`).then((response) => {
            getPokemon(response.data);
            getSprite(response.data.sprites);
            setLoad(false);
        });
    }, []);

    const parseID = () => {
        if (pokemon.id < 10) {
            return `00${pokemon.id}`;
        } else if (pokemon.id >= 10 && pokemon.id < 100) {
            return `0${pokemon.id}`;
        } else if (pokemon.id > 99) {
            return pokemon.id;
        }
    };

    const listenLoading: any = () => {
        if (loading === true) {
            return Loadinggif;
        } else {
            return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${parseID()}.png`;
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
                <img src={listenLoading()} alt={pokemonSprites.back_default} />
            </Card>
        </>
    );
}
