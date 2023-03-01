import React from 'react';
import CheckedList from './CheckedList';
import Tag from './Tag';
/**
 * Composant pour afficher la liste des tags 
 * disponibles 
 * et permettre de filtrer les événements
 */

function TagsList(props){
    const [checkedTags, setCheckedTags] = React.useState([]);
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        width: "20%",
        height: "calc(100vh - 51px)",
        margin: "0",
        padding: "0",
        backgroundColor: "grey",
    }
    const handleChange = (event) => {
        let _checkedTags = [...checkedTags];
        if(event.checked){
            _checkedTags.push(event.label);
        }else{
            _checkedTags.splice(checkedTags.indexOf(event.label), 1);
        }
        setCheckedTags(_checkedTags);
    }
    const listStyle = {
        height: "60%",
        overflowY: "auto",
    }
    return (
        <div style={containerStyle}>
            <CheckedList checkedTags={checkedTags} />
            <div className="tags" style={listStyle}>
                {props.tags.map((tag) => (
                    <Tag label={tag} onChange={handleChange} />
                ))}
            </div>
        </div>
    );
}

export default TagsList;