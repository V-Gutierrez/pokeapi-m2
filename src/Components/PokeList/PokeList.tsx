import React, { useState, useEffect } from 'react';
import api from '../../Services/api';
import styled from 'styled-components';
import PokeFrame from './../PokeFrame/PokeFrame';
import List from './PokeList_styles';

function PokeList(props: any): any {
    const [pokemonList, setPokemonList] = useState<any>([]);
    const [pages, setPages] = useState<number>(
        Number(localStorage.getItem('pages')),
    );

    const PrevButton = styled.button`
        display: ${pages === 0 ? 'none' : 'block'};
    `;

    const NextButton = styled.button`
        display: ${pages === 940 ? 'none' : 'block'};
    `;

    const handleNextPage = () => {
        if (pages === 940) {
            return;
        } else {
            console.log(pages);
            setPages(pages + 20);
        }
    };

    const handlePrevPage = () => {
        if (pages === 0) {
            return;
        } else {
            console.log(pages);
            setPages(pages - 20);
        }
    };

    useEffect(() => {
        api.get<any>(`pokemon?offset=${pages}&limit=20`).then((response) => {
            setPokemonList(response.data.results);
            console.log(localStorage.getItem('pages'));
            localStorage.setItem('pages', JSON.stringify(pages));
        });
    }, [pages]);

    return (
        <>
            <List>
                {pokemonList.map((pokemon: any) => (
                    <>
                        <div key={pokemon.url}>
                            <PokeFrame pokemonUrl={pokemon.url} />
                        </div>
                    </>
                ))}
            </List>
            <PrevButton onClick={handlePrevPage}>Previous Page</PrevButton>
            <NextButton onClick={handleNextPage}>Next Page</NextButton>
        </>
    );
}

export default PokeList;
