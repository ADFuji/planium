import React from "react";
import { useState, useEffect, setState, useRef, useCallback } from "react";

import { AppContext, AppInitialState } from '../../AppProvider';
import CheckedList from './CheckedList';
import Tag from './Tag';
/**
 * Composant pour afficher la liste des tags 
 * disponibles 
 * et permettre de filtrer les événements
 */
const s = {
    backgroundColor: "#757575",
    width: "100%",
    height: "100%",
}
function TagsList(props) {
    const { state, dispatch } = React.useContext(AppContext);
    console.log(state);
    return (
        <div className="tags-list" style={s}>
            <Tag name="Tous" />
            <Tag name="Travail" />
            <Tag name="Famille" />
            <Tag name="Amis" />
            <Tag name="Sport" />
            <Tag name="Cours" />
            <Tag name="Loisirs" />
            <Tag name="Autres" />
        </div>
    );
}

export default TagsList;