import React from "react";
import CheckedTag from "./CheckedTag";
function CheckedList(props) {
    const style = {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        height: "100px",
        marginBottom: "20px",
        overflow: "auto",
    }
    return (
        <div style={style}>
            {props.checkedTags.map((tag) => (
                <CheckedTag label={tag} />
            ))}
        </div>
    );
}

export default CheckedList;