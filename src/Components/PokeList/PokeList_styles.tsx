import styled from 'styled-components';

export const List = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 400px);
    text-align: center;
    gap: 10px;
    padding: 10px;
    height: auto;
`;

export const BtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 10vh;

    button {
        color: #1d9af2;
        background-color: #292d3e;
        border: 1px solid #1d9af2;
        border-radius: 4px;
        padding: 0 15px;
        cursor: pointer;
        height: 32px;
        font-size: 14px;
        background-position: center;
        transition: background 0.8s;
    }
    button:active {
        box-shadow: 0 3px 0 #00823f;
        top: 3px;
    }

    p {
        color: white;
        font-weight: bold;
    }

    input {
        width: 40px;
        text-align: center;
        border-radius: 5%;
        outline: none;
        border: none;
        padding: 3px;
    }
`;
