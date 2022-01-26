import React, { useState } from "react";

const ToDoItem = (props) => {

    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [editing, setEditing] = useState(false);

    const edit = () => {
        setEditing(true);
    }

    const update = () => {
        props.update({id: props.id, title, description});
        setEditing(false);
    }

    return (
        <div className = "mt-3 item text-left pb-3">
            <div style = {(editing) ? {"display": "none"} : null}> 
                <div className = "title pl-3 pr-3 pt-2 pb-2"> {props.title} </div>
                <div className = "description pl-3 pr-3 pb-2 pt-1"> {props.description}</div>
                <div className = "mt-2 text-center">
                    <button 
                        className = "btn btn-sm btn-dark expand" 
                        onClick = {() => props.delete(props.id)}
                    > Delete </button>   
                    <button 
                        className = "btn btn-sm btn-dark expand ml-3" 
                        onClick = {() => edit()}
                    > Edit </button>  
                </div> 
            </div>
            <div className = "text-center" style = {(!editing) ? {"display": "none"} : null}>
                <div className = "pt-2"> Enter New Title </div>
                    <input 
                        type = "text" 
                        value = {title}
                        onChange = {(e) => setTitle(e.target.value)}
                        placeholder = "Title" 
                        className = "input"
                    />
                <div className = "pt-2"> Enter New Description </div>
                    <textarea 
                        type = "text" 
                        value = {description}
                        onChange = {(e) => setDescription(e.target.value)}
                        placeholder = "Description"
                        rows = {3}
                        className = "input"
                    />
                <div className = "mt-2 text-center">
                    <button 
                        className = "btn btn-sm btn-dark expand ml-3" 
                        onClick = {() => update()}
                    > Update </button> 
                </div>
            </div>
        </div>
    );
}

export default ToDoItem;