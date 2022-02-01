import App from "../app/App";
import React from "react";
import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom";

jest.mock("axios");

describe("components should render without crashing", () => {

    beforeEach(() => {
        window._virtualConsole.emit = jest.fn();
    });

    it("render without testing", async() => {
        axios.get.mockImplementation(() =>
            Promise.resolve({
                data: [],
            })
        );
        render(<App />);
        await waitFor(() => {
            expect(screen.getByRole("heading", {name: "ToDo List App"})).toHaveClass("mt-5");
            expect(screen.getByTestId("inputTitle")).toHaveClass("input");
            expect(screen.getByRole("button", {name: "Add"})).toHaveClass("btn");
        });
    });

});