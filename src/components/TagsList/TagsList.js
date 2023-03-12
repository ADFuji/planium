import React from "react";
import styled from "styled-components";
import tags from "../../ParseJSON";
import { AppContext } from '../../AppProvider';

import Tag from './Tag';
/**
 * Composant pour afficher la liste des tags 
 * disponibles 
 * et permettre de filtrer les événements
 */
const Container = styled.div`
    h3 {
        color: white;
        padding: 10px;
        margin: 0;
        font-size: 1.2em;
        font-weight: 700;
    }
`;
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    @media (min-width: 320px) {
        height: 300px;
    };
    @media (min-width: 1920px) {
        height: 500px;
    };
    @media (min-width: 2400px) {
        height: 800px;
    };
`;
function TagsList(props) {
    const { state, dispatch } = React.useContext(AppContext);
    const [useTags, setUseTags] = React.useState([]);
    function addTag(name) {
        dispatch({ type: "ADD_TAG", payload: name });
        console.log(state.tags);
    }
    function removeTag(name) {
        dispatch({ type: "REMOVE_TAG", payload: name });
    }
    const displayTags = (() => {
        const ret = [];
        console.log(tags);
        tags.forEach((tag, index) => {
            console.log(index, tag);
            ret.push(
                <Tag
                    name={tag}
                    id={index}
                    addTag={addTag}
                    removeTag={removeTag}
                />
            );
        });
        /*
        tags.forEach((tag) => {
            ret.push(
                <Tag
                    name={tag}
                    id={
                        tags.indexOf(tag)
                    }
                    addTag={addTag}
                    removeTag={removeTag}
                />
            );
        });*/
        return ret;
    })();

    return (
        <Container>
            <h3>Tags disponibles</h3>
            <InputContainer>
                {displayTags}
            </InputContainer>
        </Container>
    );
}

export default TagsList;