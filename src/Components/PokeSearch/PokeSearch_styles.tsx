import styled from 'styled-components';
import Card from './../PokeFrame/PokeFrame_styles';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    overflow-x: scroll;
    margin-bottom: 25px;
    ::-webkit-scrollbar {
        display: none;
    }

    * {
        margin: 0 50px;
    }

    ${Card} {
        background-color: yellow;

        img {
            position: relative;
            right: 50px;
        }
    }
`;
export const SearchArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    font-weight: bold;

    input {
        width: 300px;
        margin: 25px auto;
        text-align: center;
        border-radius: 5%;
        outline: none;
        border: none;
        padding: 3px;
    }
`;

export const MobileText = styled.p`
    display: none;

    @media screen and (max-width: 800px) {
        display: flex;
    }
`;

export const DesktopText = styled.p`
    display: block;
    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
`;
