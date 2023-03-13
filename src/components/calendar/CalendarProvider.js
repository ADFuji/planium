import React from 'react';

const CalendarInitialState = {
    events: null,
    detail: null,
}
const CalendarContext = React.createContext(CalendarInitialState);

function CalendarReducer(state, action) {
    switch (action.type) {
        case 'SET_EVENTS': {
            return {
                ...state,
                events: action.payload,
            };
        }
        case 'SET_DETAIL': {
            return {
                ...state,
                detail: action.payload,
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