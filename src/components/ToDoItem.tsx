import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";
import { ITodos } from "../interfaces/interface";

interface Props {
    item: ITodos,
    deleteItem(id: number): void,
    update(data: ITodos): void
}

const ToDoItem: FC<Props> = observer(({item, update, deleteItem}: Props) => {

    const [title, setTitle] = useState<string>(item.title);
    const [description, setDescription] = useState<string>(item.description);
    const [editing, setEditing] = useState<boolean>(false);

    const edit = () => {
        console.log("editing started");
        setEditing(true);
    }

    const updateToDo = () => {
        update({id: item.id, title, description});
        setEditing(false);
        console.log("editing ends");
    }

    return (
        <div className = "mt-3 item text-left pb-3">
            <div style = {(editing) ? {"display": "none"} : {"display": "initial"}}> 
                <div className = "title pl-3 pr-3 pt-2 pb-2"> {item.title} </div>
                <div className = "description pl-3 pr-3 pb-2 pt-1"> {item.description}</div>
                <div className = "mt-2 text-center">
                    <button 
                        className = "btn btn-sm btn-dark expand"
                        data-testid = "deleteButton" 
                        onClick = {() => deleteItem(item.id)}
                    > Delete </button>   
                    <button 
                        className = "btn btn-sm btn-dark expand ml-3" 
                        data-testid = "editButton"
                        onClick = {() => edit()}
                    > Edit </button>  
                </div> 
            </div>
            <div className = "text-center" style = {(!editing) ? {"display": "none"} : {"display": "inherit"}}>
                <div className = "pt-2"> Enter New Title </div>
                    <input 
                        type = "text" 
                        value = {title}
                        data-testid = "editedTitle"
                        onChange = {(e) => setTitle(e.target.value)}
                        placeholder = "Title" 
                        className = "input"
                    />
                <div className = "pt-2"> Enter New Description </div>
                    <textarea  
                        value = {description}
                        onChange = {(e) => setDescription(e.target.value)}
                        data-testid = "editedDesc"
                        placeholder = "Description"
                        rows = {3}
                        className = "input"
                    />
                <div className = "mt-2 text-center">
                    <button 
                        className = "btn btn-sm btn-dark expand ml-3" 
                        data-testid = "updateButton"
                        onClick = {() => updateToDo()}
                    > Update </button> 
                </div>
            </div>
        </div>
    );
});

export default ToDoItem;