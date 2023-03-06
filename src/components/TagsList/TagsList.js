import React from "react";
import { useState, useEffect, setState, useRef, useCallback } from "react";

import { AppContext, AppInitialState } from '../AppProvider';
import CheckedList from './CheckedList';
import Tag from './Tag';
/**
 * Composant pour afficher la liste des tags 
 * disponibles 
 * et permettre de filtrer les événements
 */

function TagsList(props) {
    const { state, dispatch } = React.useContext(AppContext);
    console.log(state);
    return (
        <div className="tags-list">
        </div>
    );
}

export default TagsList;