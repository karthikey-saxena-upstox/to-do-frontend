import axios from "axios";
import { ITodo, ITodos } from "../interfaces/interface";

const backendUrl = "http://localhost:8080/todos"

export const getAll = async() => {
    const response = await axios.get(backendUrl);
    return response.data;
}

export const getById = async(id: number) => {
    const response = await axios.get(backendUrl + `/${id}`);
    return response.data;
}

export const add = async(data: ITodo) => {
    const response = await axios.post(backendUrl, data);
    return response.data;
}

export const update = async(data: ITodos) => {
    const response = await axios.put(backendUrl, data);
    return response.data;
}

export const deleteItem = async(id: number) => {
    const response = await axios.delete(backendUrl + `?id=${id}`);
    return response.data;
}