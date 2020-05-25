import React from 'react';
import GlobalStyle from './Global/global_styles';
import PokeList from './Components/PokeList/PokeList';
import Header from './Components/Header/Header';

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <PokeList />
        </>
    );
}

export default App;
