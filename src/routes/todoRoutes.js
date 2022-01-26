import axios from "axios";

const backendUrl = "http://localhost:8080/todos"

const getAllToDos = async() => {
    const response = await axios.get(backendUrl);
    return response.data;
}

const getToDoById = async(id) => {
    const response = await axios.get(backendUrl + `/${id}`);
    return response.data;
}

const addToDo = async(data) => {
    const response = await axios.post(backendUrl, data);
    return response.data;
}

const updateToDo = async(data) => {
    const response = await axios.put(backendUrl, data);
    return response.data;
}

const deleteToDo = async(id) => {
    const response = await axios.delete(backendUrl + `?id=${id}`);
    return response.data;
}

export {
    getAllToDos,
    getToDoById,
    addToDo,
    updateToDo,
    deleteToDo
}