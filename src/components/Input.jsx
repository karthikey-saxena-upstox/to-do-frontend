import React, { useState } from "react";

const Input = (props) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const change = () => {
        props.change({title, description});
        setDescription("");
        setTitle("");
    }

    return (
        <div className = "mt-3 pb-4 inputSection"> 
            <h4 className = "mt-3"> Enter new Item </h4> 
            <h5 className = "mt-3"> Enter Title </h5>
                <input 
                    type = "text" 
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                    placeholder = "Title" 
                    className = "input"
                />
            <h5 className = "mt-3"> Enter Description </h5>
                <textarea 
                    type = "text" 
                    value = {description}
                    onChange = {(e) => setDescription(e.target.value)}
                    placeholder = "Description"
                    rows = {3}
                    className = "input"
                />
            <div className = "mt-4"> 
                <button 
                    className = "btn btn-dark expand" 
                    onClick = {() => change()}
                > Add </button>
            </div>
        </div>
    );
}

export default Input;