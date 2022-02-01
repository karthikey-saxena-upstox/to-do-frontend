import React, { FC, useEffect } from "react";
import { observer } from "mobx-react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import ToDoList from "../components/ToDoList"; 
import { ITodo, ITodos } from "../interfaces/interface";
import toDoService from "../service/todoService";

const ToDos: FC = () => {

    const { toDoItems } = toDoService;

    const fetchToDos = async() => {
        try {
            await toDoService.getAllItems();
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchToDos();
    }, []);

    const deleteToDo = async(id: number) => {
        try {
            await toDoService.deleteItem(id);
        }
        catch(err) {
            console.log(err);
        }
    }

    const updateToDo = async(data: ITodos) => {
        try {
            await toDoService.updateItem(data);
        }
        catch(err) {
            console.log(err);
        }   
    }

    const addToDo = async(data: ITodo) => {
        try {
            await toDoService.addItem(data);
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
            items = {toDoItems} 
            deleteItem = {(id: number) => deleteToDo(id)}
            update = {(data: ITodos) => updateToDo(data)}
        />
    </div>
    );

}

export default observer(ToDos);