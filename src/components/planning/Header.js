import React, {useContext} from "react";
import {DateContext} from '../calendar/DateProvider';

function Header(props){
    const {state, dispatch} = useContext(DateContext);
    return(
        <div>
        </div>
    )
}

export default Header;