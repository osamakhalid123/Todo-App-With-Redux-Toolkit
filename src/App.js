import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Displaytodos from "./Components/Displaytodos";
import InputForm from "./Components/InputForm";
function App() {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();
  const addtodo = useSelector((state) => state.todos);

  return (
    <div>
      <Title>Todo-App</Title>
      <InputForm dispatch={dispatch} input={input} setinput={setinput} />
      {addtodo.map((todo) => (
        <Displaytodos
          dispatch={dispatch}
          id={todo.id}
          key={todo.id}
          item={todo.name}
          complete={todo.completed}
        />
      ))}
    </div>
  );
}

const Title = styled.h1`
  color: white;
  margin-top: 1rem;
  font-size: 3rem;
  text-align: center;
`;
export default App;
