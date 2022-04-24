import React from "react";
import { savetodos } from "../Redux/TodoReducer";
import styled from "styled-components";

function InputForm({ input, setinput, dispatch }) {
  const Handleinput = (e) => {
    e.preventDefault();
    setinput(e.target.value);
  };
  return (
    <Container>
      <Input
        placeholder="Write a Task...."
        value={input}
        type="text"
        onChange={Handleinput}
      />

      <Button
        type="button"
        disabled={!input}
        onClick={() => {
          setinput("");
          dispatch(savetodos(input));
        }}
      >
        add Task
      </Button>
    </Container>
  );
}
export default InputForm;

const Container = styled.div`
  text-align: center;
  margin: 3rem 0;
`;
const Input = styled.input`
  outline-color: rgb(61, 49, 116);
  width: 15rem;
  height: 2.1rem;
  border-radius: 8px;
  font-size: large;
  margin-right: 0.5rem;
  border: 1px solid rgb(135, 36, 255);
  outline: none;
  &:focus {
    border: 3px solid rgb(135, 36, 255);
  }
`;

const Button = styled.button`
  background-color: rgb(135, 36, 255);
  color: white;
  /* height: 1.7rem; */
  padding: 0.4rem;
  border-radius: 5px;
  border: none;
  font-size: large;
  font-weight: bolder;
  text-transform: uppercase;
  cursor: pointer;
`;
