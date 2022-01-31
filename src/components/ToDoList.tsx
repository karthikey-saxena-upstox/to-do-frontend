import React, { FC } from "react";
import ToDoItem from "./ToDoItem";
import { ITodos } from "../interfaces/interface";
import { observer } from "mobx-react-lite";

interface Props {
    items: ITodos[],
    deleteItem(id: number): void,
    update(data: ITodos): void
}

const ToDoList: FC<Props> = observer(({items, update, deleteItem}: Props) => {

    return (
        <div>
            {items.map((item: ITodos) => {
            return (
                <ToDoItem 
                    key = {item.id}
                    item = {item}
                    deleteItem = {(id: number) => deleteItem(id)}
                    update = {(data: ITodos) => update(data)}
                />
            );
            })}
        </div>
    );
});

export default ToDoList;