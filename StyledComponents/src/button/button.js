import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 200px;
    height: 50px;
    background-color: green;
    color: white;

    padding: 13px;
    padding-left: 50px;

    border-radius: 10px;

    margin-top: 20px;
    
`

export const ButtonDecrement = styled(Button)`
    background-color: red;
    color: white;
`


