import React from 'react';
import GlobalStyle from './Global/global_styles';
import PokeList from './Components/PokeList/PokeList';
import Header from './Components/Header/Header';
import { Wrapper, Text } from './Components/Wrapper/Wrapper_styles';
import PokeSearch from './Components/PokeSearch/PokeSearch';

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <PokeSearch />
            <Wrapper>
                <PokeList />
                <Text>
                    Made by:{' '}
                    <a href="https://github.com/V-Gutierrez">
                        Victor Gutierrez
                    </a>
                </Text>
            </Wrapper>
        </>
    );
}

export default App;
