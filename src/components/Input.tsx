import React, { FC, useState } from "react";
import { ITodo } from "../interfaces/interface";
import { observer } from "mobx-react-lite";

interface Props {
    change(data: ITodo): void
}

const Input: FC<Props> = observer(({change}: Props) => {

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const changeData = (): void => {
        change({title, description});
        setDescription("");
        setTitle("");
    }

    return (
        <div className = "mt-3 pb-4 inputSection"> 
            <h4 className = "mt-3"> Enter new Item </h4> 
            <h5 className = "mt-3"> Enter Title </h5>
                <input 
                    type = "text" 
                    data-testid = "inputTitle"
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                    placeholder = "Title" 
                    className = "input"
                />
            <h5 className = "mt-3"> Enter Description </h5>
                <textarea 
                    value = {description}
                    data-testid = "descTitle"
                    onChange = {(e) => setDescription(e.target.value)}
                    placeholder = "Description"
                    rows = {3}
                    className = "input"
                />
            <div className = "mt-4"> 
                <button 
                    className = "btn btn-dark expand" 
                    onClick = {() => changeData()}
                > Add </button>
            </div>
        </div>
    );
});

export default Input;