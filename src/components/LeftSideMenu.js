import React from "react";
import styled from "styled-components";

const commonStyles = {
    position: "fixed",
    top: "51px",
    bottom: "0",
    padding: "5px",
    width: "300px",
    transition: '0.5s',
    overflow: "hidden",
    backgroundColor: "#757575",
    borderRadius: "0 15px 15px 0",
};

const visibleStyles = {
    ...commonStyles,
    left: '0'
};

const hiddenStyles = {
    ...commonStyles,
    left: '-310px'
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