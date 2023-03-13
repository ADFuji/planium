import React, { useContext, useEffect, useState, useReducer } from 'react';
import styled from 'styled-components';
const EventsModal = styled.div`
    display: ${props => props.top !== null ? 'block' : 'none'};
    position: absolute;
    top: ${props => props.top ? props.top : -10}px;
    left: ${props => props.left ? props.left : -10}px;
    width: 200px;
    height: 200px;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    z-index: 100;
    transition: all 0.3s ease-in-out;
`;
const CalendarInitialState = {
    modal: <EventsModal id="eventsModal" top={null} left={null} />,
}
const CalendarContext = React.createContext(CalendarInitialState);

function CalendarReducer(state, action) {
    switch (action.type) {
        case 'SET_MODAL': {
            return {
                ...state,
                modal: action.payload,
            };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function CalendarProvider({ children }) {
    const [state, dispatch] = React.useReducer(CalendarReducer, CalendarInitialState);
    const value = { state, dispatch };

    return <CalendarContext.Provider value={value}>{children}</CalendarContext.Provider>;
};

export { CalendarProvider, CalendarContext, CalendarReducer };