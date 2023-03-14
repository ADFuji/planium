import React from "react";
const initAppContext = {
    date: {
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    },
    lang: "en",
    theme: "light",
    tags: []
};

const AppContext = React.createContext(initAppContext);

function AppReducer(state, action) {
    switch (action.type) {
        case "CHANGE_LANG":
            return { ...state, lang: state.lang === "fr" ? "en" : "fr" };
        case "SET_DATE":
            return { ...state, date: action.payload };
        case "SET_LANG":
            return { ...state, lang: action.payload };
        case "SET_THEME":
            return { ...state, theme: action.payload };
        case "CHANGE_THEME":
            return { ...state, theme: state.theme === "light" ? "dark" : "light" };
        case "SET_TAGS":
            return { ...state, tags: action.payload };
        case "ADD_TAG":
            return { ...state, tags: [...state.tags, action.payload] };
        case "REMOVE_TAG":
            return {
                ...state,
                tags: state.tags.filter((tag) => tag !== action.payload),
            };
        case 'nextMonth': {
            if (state.date.month === 11) {
                return {
                    ...state,
                    date: {
                        month: 0,
                        year: state.date.year + 1
                    }
                }
            }
            else {
                return {
                    ...state,
                    date: {
                        month: state.date.month + 1,
                        year: state.date.year
                    }
                }
            }
        }
        case 'prevMonth': {
            if (state.date.month === 0) {
                return {
                    ...state,
                    date: {
                        month: 11,
                        year: state.date.year - 1
                    }
                }
            }
            else {
                return {
                    ...state,
                    date: {
                        month: state.date.month - 1,
                        year: state.date.year
                    }
                }
            }
        }
        case 'nextYear': {
            return {
                ...state,
                date: {
                    month: state.date.month,
                    year: state.date.year + 1
                }
            }
        }
        case 'prevYear': {
            return {
                ...state,
                date: {
                    month: state.date.month,
                    year: state.date.year - 1
                }
            }
        }
        case 'SET_DATE_TO_TODAY': {
            return {
                ...state,
                date: {
                    month: new Date().getMonth(),
                    year: new Date().getFullYear()
                }
            }
        }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}
export { initAppContext, AppContext, AppReducer };
export default function AppProvider(props) {
    const [state, dispatch] = React.useReducer(AppReducer, initAppContext);
    const value = { state, dispatch };
    return <AppContext.Provider value={value} {...props} />;
}