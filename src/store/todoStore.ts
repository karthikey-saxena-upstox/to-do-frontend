import { observable, action, configure, makeObservable } from "mobx";
import { ITodos } from "../interfaces/interface";

configure({
    enforceActions: "never",
});

export class ToDoStore {

    toDoItems: ITodos[] = [];

    constructor() {
        makeObservable(this, {
            toDoItems: observable,
            createToDo: action,
            updateToDo: action,
            deleteToDo: action,
            setToDoItems: action
        });
    }

    setToDoItems = async(todos: ITodos[]) => {
        this.toDoItems = todos;
    }

    createToDo = async(todo: ITodos) => {
        this.toDoItems.push(todo);
    }

    updateToDo = async(id: number, todo: ITodos) => {
        const todoIndexAtId: number = this.toDoItems.findIndex((todo) => todo.id === id);
        if (todoIndexAtId >= 0 && todo) {
            this.toDoItems[todoIndexAtId] = todo;
        }
    }

    deleteToDo = async(id: number) => {
        const todoIndexAtId: number = this.toDoItems.findIndex((todo) => todo.id === id);
        if (todoIndexAtId >= 0) {
            this.toDoItems.splice(todoIndexAtId, 1);
        }
    }
}