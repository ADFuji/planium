import React, { createContext, useContext, createReducer, useReducer, useState } from 'react';

const AppInitialState = {
    lang: 'fr',
    theme: 'light',
    date: {
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    },
    tags: [],
    currentEvent: null,
};

const AppContext = createContext(AppInitialState);
console.log(AppContext);

function appReducer(state, action) {
    switch (action.type) {
        // Switch language between french and english
        case 'changeLang': {
            return {
                ...state,
                lang: state.lang === 'fr' ? 'en' : 'fr',
            };
        }
        // Switch theme between light and dark
        case 'changeTheme': {
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light',
            };
        }
        // Change the current month and year by the next month
        case 'nextMonth': {
            if (state.date.month === 11) {
                return {
                    date: {
                        month: 0,
                        year: state.date.year + 1
                    }
                }
            }
            else {
                return {
                    date: {
                        month: state.date.month + 1,
                        year: state.date.year
                    }
                }
            }
        }
        // Change the current month and year by the previous month
        case 'prevMonth': {
            if (state.date.month === 0) {
                return {
                    date: {
                        month: 11,
                        year: state.date.year - 1
                    }
                }
            }
            else {
                return {
                    date: {
                        month: state.date.month - 1,
                        year: state.date.year
                    }
                }
            }
        }
        // Add a tag to the list of tags
        case 'addTag': {
            return {
                ...state,
                tags: [...state.tags, action.payload]
            };
        }
        // Remove a tag from the list of tags
        case 'removeTag': {
            return {
                ...state,
                tags: state.tags.filter(tag => tag !== action.payload)
            };
        }
        case 'clearTags': {
            return {
                ...state,
                tags: []
            };
        }
        // Set the current event
        case 'setCurrentEvent': {
            return {
                ...state,
                currentEvent: action.payload
            };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    };
};

/**
 * AppProvider, a context provider for the app
 */
function AppProvider({ children }) {
    const [state, dispatch] = useReducer(appReducer, AppInitialState);
    const value = { state, dispatch };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export { AppProvider, AppContext, AppInitialState, appReducer };