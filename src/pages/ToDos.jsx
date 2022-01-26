import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import ToDoItem from "../components/ToDoItem";
const toDoService = require("../routes/todoRoutes");


const ToDos = () => {

    const [toDoItems, setToDoItems] = useState([]);

    useEffect(() => {
        const fetch = async() => {
            try {
                const data = await toDoService.getAllToDos();
                console.log(data);
                setToDoItems(data);
            }
            catch(err) {
                console.log(err);
            }
        }
        fetch();
    }, []);

    const deleteToDo = async(id) => {
        try {
            await toDoService.deleteToDo(id);
            const items = await toDoService.getAllToDos();
            setToDoItems(items);
        }
        catch(err) {
            console.log(err);
        }
    }

    const updateToDo = async(data) => {
        try {
            const response = await toDoService.updateToDo(data);
            const items = await toDoService.getAllToDos();
            setToDoItems(items);
            console.log(response);
        }
        catch(err) {
            console.log(err);
        }   
    }

    const addToDo = async(data) => {
        try {
            const response = await toDoService.addToDo(data);
            setToDoItems((prev) => [...prev, response]);
            console.log(response);
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
        {toDoItems.map((item) => {
            return (
                <ToDoItem 
                    key = {item.id}
                    id = {item.id}
                    title = {item.title}
                    description = {item.description}
                    delete = {(id) => deleteToDo(id)}
                    update = {(data) => updateToDo(data)}
                />
            );
        })}
    </div>
    );

}

export default ToDos;