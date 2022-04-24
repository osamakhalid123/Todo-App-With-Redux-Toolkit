import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const TodoClice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        savetodos: (state, action) => {
            state.push({
                name: action.payload,
                id: Math.floor(Math.random() * 10000),
                completed: false,
            });
        },
        deletetodo: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },

        edittodo: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        name: action.payload.update,
                    };
                }
                return todo;
            });
        },
    },
});


export const { savetodos, deletetodo, edittodo } = TodoClice.actions;

export default TodoClice;