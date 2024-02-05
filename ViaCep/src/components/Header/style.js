import styled from "styled-components";
    
    //Header container - View
    //HeaderContent - Safe Area View
    //TextHeader - Text

export const HeaderContainer = styled.View`
    background-color: #FECC2B;
    height: 20%;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 0px 0px 15px 15px;
    box-shadow: 0px 0px 10px black;
`

export const HeaderContent = styled.SafeAreaView`

`

export const TextHeader = styled.Text`
    font-size: 24px;
    font-family: 'Roboto_500Medium';
    color: #333E33;
    text-align: center;
`