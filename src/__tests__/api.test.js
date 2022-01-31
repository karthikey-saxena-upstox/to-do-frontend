import App from "../app/App";
import React from "react";
import axios from "axios";
import ToDoList from "../components/ToDoList";
import Input from "../components/Input";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { deleteItem, update, add } from "../service/todoService";

import "@testing-library/jest-dom";

const baseUrl = "http://localhost:8080/todos";

jest.mock("axios");

describe("components should render without crashing", () => {

    it("Todos should be fetched and displayed - Get Request", async () => {
        const todos = [
            { id: 1, title: "test", description: "desc" }
        ];
        await axios.get.mockImplementation(() =>
            Promise.resolve({
                data: todos,
            })
        );
        render(<App />);
        expect(axios.get).toHaveBeenCalled();
        await waitFor(() => {
            // screen.debug();
            expect(screen.getAllByRole("button", {name: "Edit"})).toHaveLength(1);
        });
    });

    it("Todo should get created - Post Request", async () => {
        axios.post.mockImplementationOnce(() => Promise.resolve({}));
        render(<Input change = {(data) => add(data)} />);
        userEvent.type(screen.getByTestId("inputTitle"), "title");
        userEvent.type(screen.getByTestId("descTitle"), "desc");
        userEvent.click(screen.getByRole("button", {name: "Add"}));
        await waitFor(() => {
            expect(axios.post).toHaveBeenCalledWith(
                baseUrl,
                expect.objectContaining({
                    title: "title",
                    description: "desc",
                })
            );
        });
    });

    it("Todo should be Updated - Put Request", async() => {
        const todos = [
            { id: 1, title: "title", description: "desc" }
        ];
        axios.put.mockImplementationOnce(() => Promise.resolve({}));
        render(<ToDoList items = {todos} update = {(data) => update(data)} deleteItem = {(id) => deleteItem(id)} />);
        userEvent.click(screen.getByTestId("editButton"));
        userEvent.type(screen.getByTestId("editedTitle"), "Updated");
        userEvent.type(screen.getByTestId("editedDesc"), "Updated");
        userEvent.click(screen.getByTestId("updateButton"));
        await waitFor(() => {
            expect(axios.put).toHaveBeenCalledWith(
                baseUrl,
                expect.objectContaining({
                    title: "titleUpdated",
                    description: "descUpdated",
                    id: 1,
                })
            );
        });
    });

    it("Todo should be deleted - Delete Request", async() => {
        const todos = [
            { id: 1, title: "title", description: "desc" }
        ];
        axios.delete.mockImplementationOnce(() => Promise.resolve({}));
        render(<ToDoList items = {todos} update = {(data) => update(data)} deleteItem = {(id) => deleteItem(id)} />);
        userEvent.click(screen.getByTestId("deleteButton"));
        await waitFor(() => {
            expect(axios.delete).toHaveBeenCalledWith(`${baseUrl}?id=1`);
        });
    });


});