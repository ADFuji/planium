import React from "react";
import styled from "styled-components";

const commonStyles = {
    width: "0",
    transition: '0.5s',
    overflow: "hidden",
    backgroundColor: "#757575",
    borderRadius: "0 15px 15px 0",
};

const visibleStyles = {
    ...commonStyles,
    width: "20%",
};

const hiddenStyles = {
    ...commonStyles,
}

const LeftSideMenuContainer = styled.div`
    ${commonStyles}
`;

function LeftSideMenu(props) {
    const { visible } = props;

    return (
        <div style={visible ? visibleStyles : hiddenStyles}>
            {props.children}
        </div>
    )
}

export default LeftSideMenu;