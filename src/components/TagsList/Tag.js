import React from 'react';
/**
 * Composant Tag pour afficher un tag et permettre de le cocher
 */

function Tag(props) {
    const [checked, setChecked] = React.useState(false);
    const [label, setLabel] = React.useState(props.label);
    const handleChange = (event) => {
        setChecked(event.target.checked);
        props.onChange({ label: label, checked: event.target.checked });
    }
    const containerStyle = {
        backgroundColor: checked ? "red" : "white",
        color: checked ? "white" : "black",
        display: "flex",
        alignItems: "center",
        width: "200px",
        padding: "5px",
        margin: "5px",
        borderRadius: "5px",
        cursor: "pointer",
    }
    const inputStyle = {
        marginRight: "15px",
    }
    const handleOnClick = () => {
        handleChange({ target: { checked: !checked } });
    }
    return (
        <div className="tag" style={containerStyle} onClick={handleOnClick}>
            <input type="checkbox" checked={checked} onChange={handleChange} style={inputStyle} />
            <label>{label}</label>
        </div>
    );
}

export default Tag;