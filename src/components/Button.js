import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.span`
    margin: 0px 5px;
    padding: 5px 10px;
    font-size: 1.2rem;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
        background-color: rgba(0,0,0,0.1);
    }
`;

function Button(props) {
    return (
        <ButtonContainer onClick={props.onClick}>{props.children}</ButtonContainer>
    );
}

export default Button;
