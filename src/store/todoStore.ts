import { observable, action, runInAction, configure, makeObservable } from "mobx";
import { ITodos, ITodo } from "../interfaces/interface";
import { add, update, deleteItem, getAll } from "../service/todoService";

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
            deleteToDo: action
        });
        runInAction(this.fetchToDos);
    }

    fetchToDos = async() => {
        const todos: ITodos[] = await getAll();
        this.toDoItems = todos;
    }

    createToDo = async(todo: ITodo) => {
        const savedToDo: ITodos = await add(todo);
        this.toDoItems.push(savedToDo);
    }

    updateToDo = async(id: number, todo: ITodos) => {
        await update(todo);
        const todoIndexAtId: number = this.toDoItems.findIndex((todo) => todo.id === id);
        if (todoIndexAtId >= 0 && todo) {
            this.toDoItems[todoIndexAtId] = todo;
        }
    }

    deleteToDo = async(id: number) => {
        await deleteItem(id);
        const todoIndexAtId: number = this.toDoItems.findIndex((todo) => todo.id === id);
        if (todoIndexAtId >= 0) {
            this.toDoItems.splice(todoIndexAtId, 1);
        }
    }
}