import React from 'react';
import GlobalStyle from './Global/global_styles';
import PokeList from './Components/PokeList/PokeList';

function App() {
    return (
        <>
            <GlobalStyle />
            <h1>PokeDex</h1>
            <PokeList />
        </>
    );
}

export default App;
