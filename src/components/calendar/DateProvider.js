import React, { useContext, useEffect, useState, useReducer} from 'react';

const dateInitialState = {
    date: {
        month: 1,
        year: 2023
    }
}
const DateContext = React.createContext(dateInitialState);

function dateReducer(state, action){
    switch (action.type){
        case 'nextMonth': {
            if(state.date.month === 11){
                return {
                    date: {
                        month: 0,
                        year: state.date.year +1
                    }
                }
            }
            else{
                return {
                    date: {
                        month: state.date.month + 1,
                        year: state.date.year
                    }
                }
            }
        }
        case 'prevMonth': {
            if(state.date.month === 0){
                return {
                    date: {
                        month: 11,
                        year: state.date.year - 1
                    }
                }
            }
            else{
                return {
                    date: {
                        month: state.date.month - 1,
                        year: state.date.year
                    }
                }
            } 
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function DateProvider({children}){
    const [state, dispatch] = React.useReducer(dateReducer, {
        date: {
            month: 1,
            year: 2023
        }
    });
    const value = {state, dispatch};

    return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

export {DateProvider, DateContext, dateReducer};