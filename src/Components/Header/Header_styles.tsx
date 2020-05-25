import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    background-color: #ef5350;
    height: 15vh;
    margin-bottom: 50px;
    justify-content: space-evenly;
    align-items: center;
    color: white;

    img {
        width: 200px;
    }

    span {
        display: flex;
        width: 400px;
        align-items: center;
        justify-content: space-evenly;
    }
`;

export default Container;
