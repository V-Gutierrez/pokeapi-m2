import styled from 'styled-components';

const Card = styled.div`
    background-color: wheat;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    border-radius: 5%;
    justify-content: space-evenly;
    padding: 10px;
    width: 400px;
    height: 200px;

img{
    max-width: 50%;

}

@media screen and (max-width: 800px){
    width: 350px
`;

export default Card;
