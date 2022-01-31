export interface ITodos {
    id: number,
    title: string, 
    description: string
}


export interface ITodo {
    title: string,
    description: string
}

export interface IStore {
    toDoItems: ITodos[],
    createToDo(todo: ITodo): void,
    updateToDo(id: number, todo: ITodos): void,
    deleteToDo(id: number): void
}