import React from "react";
import styled from "styled-components";
const ContainerStyle = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 5px;
        padding: 5px;
        border-radius: 5px;
        background-color: #f5f5f5;
        &:hover {
            background-color: #e0e0e0;
        }
    `;
function CheckedTag(props) {

    const labelStyle = styled.p`
        margin: 0;
        padding: 0;
        font-size: 1.2em;
    `;
    return (
        <ContainerStyle>
            <labelStyle>{props.label}</labelStyle>
        </ContainerStyle>
    );
}

export default CheckedTag;