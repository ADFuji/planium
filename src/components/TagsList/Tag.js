import React from "react";
import styled from "styled-components";

const Container = styled.div`
    cursor: pointer;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    padding: 10px;
    margin: 5px;
    min-height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    @media (min-width: 320px) {
    };
    @media (min-width: 1920px) {
    
    };
    ${props => props.active ? `
        background-color: #8b9898;
        color: white;
    ` : null}
`;
const Checkbox = styled.input`
    margin-right: 10px;
    background-color: #8b9898;
    color: white;
`;
const Icon = styled.span`
    cursor: pointer;
    margin-left: 10px;
`;

function Tag(props) {
    const [selected, setSelected] = React.useState(false);
    function toggleSelected() {
        setSelected(!selected);
        if (selected) {
            props.removeTag(props.id);
        }
        else {
            props.addTag(props.id);
        }
    }
    return (
        <Container onClick={toggleSelected} active={selected}>
            <div>
                <Checkbox type="checkbox" checked={selected} readOnly />
                {props.name}
            </div>
            {selected ? <Icon onClick={toggleSelected}>✗</Icon> : null}
        </Container>
    )
}

export default Tag;