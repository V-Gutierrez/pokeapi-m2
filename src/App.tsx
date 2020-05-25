import React from 'react';
import GlobalStyle from './Global/global_styles';
import PokeList from './Components/PokeList/PokeList';
import Header from './Components/Header/Header';
import { Wrapper } from './Components/Wrapper/Wrapper_styles';

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Wrapper>
                <PokeList />
            </Wrapper>
        </>
    );
}

export default App;
