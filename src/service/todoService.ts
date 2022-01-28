import axios from "axios";
import { ITodo, ITodos } from "../interfaces/interface";

const backendUrl = "http://localhost:8080/todos"

export const getAll = async(): Promise<ITodos[]> => {
    const response = await axios.get(backendUrl);
    return response.data;
}

export const getById = async(id: number): Promise<ITodos> => {
    const response = await axios.get(backendUrl + `/${id}`);
    return response.data;
}

export const add = async(data: ITodo): Promise<ITodos> => {
    const response = await axios.post(backendUrl, data);
    return response.data;
}

export const update = async(data: ITodos): Promise<ITodos> => {
    const response = await axios.put(backendUrl, data);
    return response.data;
}

export const deleteItem = async(id: number): Promise<void> => {
    await axios.delete(backendUrl + `?id=${id}`);
}