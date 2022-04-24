import { configureStore } from "@reduxjs/toolkit";
import TodoClice from "./TodoReducer";


export const store = configureStore({
    reducer: { todos: TodoClice.reducer },
});