import React from "react";
import { deletetodo, edittodo } from "../Redux/TodoReducer";
import { useState } from "react";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";

function Displaytodos({ item, dispatch, id }) {
  const [update, setupdate] = useState("");
  const [showEdit, setShowEdit] = useState(true);

  const Handleupdate = (e) => {
    e.preventDefault();
    setupdate(e.target.value);
  };

  return (
    <Container>
      <div>
        {showEdit ? (
          <Task> {item} </Task>
        ) : (
          <EditInput
            placeholder="Update Task"
            value={update}
            type="text"
            onChange={Handleupdate}
          />
        )}
      </div>
      <div>
        <Edit
          onClick={() => {
            setShowEdit(!showEdit);
            dispatch(edittodo({ id, update }));
            setupdate(update);
          }}
        >
          edit
        </Edit>
        <Close onClick={() => dispatch(deletetodo(id))}> delet </Close>
      </div>
    </Container>
  );
}

const Edit = styled(EditIcon)`
  cursor: pointer;
  transform: scale(1.6);
  margin-right: 2rem;
`;
const Close = styled(ClearIcon)`
  cursor: pointer;
  color: red;
  transform: scale(1.6);
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;
  text-align: center;
  justify-content: space-around;
  background-color: rgb(19, 173, 254);
  width: 60vw;
  height: 3.4rem;
  border-radius: 30px;
`;

const Task = styled.p`
  color: white;
  font-size: 2.3rem;
`;

const EditInput = styled.input`
  outline-color: rgb(61, 49, 116);
  width: 15rem;
  height: 2.1rem;
  border-radius: 8px;
  font-size: large;
  margin-right: 0.5rem;
  outline: none;
  border: 1px solid rgb(135, 36, 255);

  &:focus {
    border: 3px solid rgb(135, 36, 255);
  }
`;

export default Displaytodos;
