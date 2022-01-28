import React, { FC, useEffect, useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import ToDoItem from "../components/ToDoItem";
import { ITodo, ITodos } from "../interfaces/interface";
import { add, update, deleteItem, getAll } from "../service/todoService";

const ToDos: FC = () => {

    const [toDoItems, setToDoItems] = useState<ITodos[]>([]);

    useEffect(() => {
        const fetch = async() => {
            try {
                const data = await getAll();
                console.log(data);
                setToDoItems(data);
            }
            catch(err) {
                console.log(err);
            }
        }
        fetch();
    }, []);

    const deleteToDo = async(id: number) => {
        try {
            await deleteItem(id);
            const items = await getAll();
            setToDoItems(items);
        }
        catch(err) {
            console.log(err);
        }
    }

    const updateToDo = async(data: ITodos) => {
        try {
            const response = await update(data);
            const items = await getAll();
            setToDoItems(items);
            console.log(response);
        }
        catch(err) {
            console.log(err);
        }   
    }

    const addToDo = async(data: ITodo) => {
        try {
            const response = await add(data);
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
        {toDoItems.map((item: ITodos) => {
            return (
                <ToDoItem 
                    key = {item.id}
                    item = {item}
                    deleteItem = {(id: number) => deleteToDo(id)}
                    update = {(data: ITodos) => updateToDo(data)}
                />
            );
        })}
    </div>
    );

}

export default ToDos;