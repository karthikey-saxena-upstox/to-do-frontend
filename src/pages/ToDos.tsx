import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import Heading from "../components/Heading";
import Input from "../components/Input";
import ToDoList from "../components/ToDoList"; 
import { ITodo, ITodos, IStore } from "../interfaces/interface";

interface Props {
    store: IStore
}

const ToDos: FC<Props> = observer(({ store }: Props) => {

    const deleteToDo = async(id: number) => {
        try {
            store.deleteToDo(id);
        }
        catch(err) {
            console.log(err);
        }
    }

    const updateToDo = async(data: ITodos) => {
        try {
            store.updateToDo(data.id, data);
        }
        catch(err) {
            console.log(err);
        }   
    }

    const addToDo = async(data: ITodo) => {
        try {
            store.createToDo(data);
        }
        catch(err) {
            console.log(err);
        }
    }

    return (
    <div className = "container text-center"> 
        <Heading content = "ToDo List App"/>
        <Input change = {(data) => addToDo(data)}/>
        <Heading content = "My List"/>
        <ToDoList 
            items = {store.toDoItems} 
            deleteItem = {(id: number) => deleteToDo(id)}
            update = {(data: ITodos) => updateToDo(data)}
        />
    </div>
    );

})

export default ToDos;