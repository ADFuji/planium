import React from "react";

import styled from "styled-components";

const LogoContainer = styled.div`
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #333;
    user-select: none;
    padding-left: 10px;
`;

function Logo(props) {
    return <LogoContainer>{props.children}</LogoContainer>;
}

export default Logo;