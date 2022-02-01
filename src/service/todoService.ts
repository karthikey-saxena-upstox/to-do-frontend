import axios from "axios";
import { ITodo, ITodos } from "../interfaces/interface";
import { ToDoStore } from "../store/todoStore";

const backendUrl = "http://localhost:8080/todos"

class ToDoService extends ToDoStore {

    getAllItems = async(): Promise<void> => {
        const response = await axios.get(backendUrl);
        this.setToDoItems(response.data);
    }
    
    addItem = async(data: ITodo): Promise<void> => {
        const response = await axios.post(backendUrl, data);
        this.createToDo(response.data);
    }
    
    updateItem = async(data: ITodos): Promise<void> => {
        const response = await axios.put(backendUrl, data);
        this.updateToDo(response.data.id, response.data);
    }
    
    deleteItem = async(id: number): Promise<void> => {
        await axios.delete(backendUrl + `?id=${id}`);
        this.deleteToDo(id);
    }

}

export default new ToDoService();



