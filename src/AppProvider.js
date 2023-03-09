import React from "react";

const initAppContext = {
    date: {
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    },
    lang: "en",
    theme: "light",
    tags: [],
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
        case "SET_TAGS":
            return { ...state, tags: action.payload };
        default:
            return state;
    }
}
export {    initAppContext, AppContext, AppReducer };
export default function AppProvider(props) {
    const [state, dispatch] = React.useReducer(AppReducer, initAppContext);
    const value = { state, dispatch };
    return <AppContext.Provider value={value} {...props} />;
}