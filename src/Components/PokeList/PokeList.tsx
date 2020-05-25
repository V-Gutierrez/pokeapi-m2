import React, { useState, useEffect } from 'react';
import api from '../../Services/api';
import styled from 'styled-components';
import PokeFrame from './../PokeFrame/PokeFrame';
import { List, BtnWrapper } from './PokeList_styles';

function PokeList(props: any): any {
    const [pokemonList, setPokemonList] = useState<any>([]);
    const [pages, setPages] = useState<number>(
        Number(localStorage.getItem('pages')),
    );

    const PrevButton = styled.button`
        display: ${pages === 0 ? 'none' : 'block'};
    `;

    const NextButton = styled.button`
        display: ${pages === 780 ? 'none' : 'block'};
    `;

    const handleNextPage = () => {
        if (pages === 780) {
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

    const setNewPage = (e: any) => {
        setPages(e.target.value * 20);
    };

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
            <BtnWrapper>
                <PrevButton onClick={handlePrevPage}>Anterior</PrevButton>
                <p>
                    Página atual: {pages / 20}/{780 / 20} <br />
                    Go to:{' '}
                    <input
                        onChange={setNewPage}
                        value={pages / 20}
                        type="number"
                        max={39}
                        min={0}
                    />
                </p>
                <NextButton onClick={handleNextPage}>Próxima</NextButton>
            </BtnWrapper>
        </>
    );
}

export default PokeList;
