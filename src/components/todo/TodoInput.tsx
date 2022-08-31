import styled from "styled-components";
import { useTodoContext } from "../../context/useTodoContext";
import { GreenButton } from "../common/Button";
import useTodo from "./hooks/useTodo";

const TodoInput = () => {
  const { inputCreateTodo, handleCreate } = useTodo(useTodoContext());
  return (
    <>
      <S.Form onSubmit={handleCreate}>
        <S.InputBar {...inputCreateTodo} placeholder="할 일 입력" />
        <GreenButton>추가</GreenButton>
      </S.Form>
    </>
  );
};

export default TodoInput;

const S: any = {};

S.Form = styled.form`
  display: flex;
  width: 25rem;
  justify-content: space-between;
`;

S.InputBar = styled.input`
  width: 15rem;
`;
