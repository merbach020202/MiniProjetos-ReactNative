import styled from "styled-components";

// componente que contém a label mais input
export const FieldContent = styled.View`

    /* Define o valor da largura como o valor da props.fieldWidth */
    width: ${props => `${props.fieldWidth}%`};

`