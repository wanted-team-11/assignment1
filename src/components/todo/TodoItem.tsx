import { FormEvent, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useTodoContext } from "../../context/useTodoContext";
import { Todo } from "../../services/model/todo";
import { BlueButton, RedButton } from "../common/Button";
import useDeleteTodo from "./hooks/useDeleteTodo";
import useEditTodo from "./hooks/useEditTodo";

const TodoItem = (item: Todo) => {
  const { todo, isCompleted, id } = item;
  const [isEditMode, setIsEditMode] = useState(false);
  const { inputProps, handleEdit, initEditMode } = useEditTodo(
    useTodoContext()
  );
  const { handleDelete } = useDeleteTodo(useTodoContext());

  useEffect(() => {
    inputProps.ref.current?.focus();
  }, [isEditMode, inputProps]);
  return (
    <>
      <S.Container
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleEdit({ ...item, todo: inputProps.value });
          setIsEditMode(!isEditMode);
        }}
      >
        <S.DoneCheckBox
          type="checkbox"
          checked={isCompleted}
          onChange={() =>
            handleEdit({ ...item, isCompleted: !item.isCompleted })
          }
        />
        {!isEditMode ? (
          <>
            <S.Content isCompleted={isCompleted}>{todo}</S.Content>
            <BlueButton
              isReversal
              onClick={(e) => {
                e.preventDefault();
                initEditMode(item);
                setIsEditMode(!isEditMode);
              }}
            >
              수정
            </BlueButton>
            <RedButton
              onClick={(e) => {
                e.preventDefault();
                handleDelete(id);
              }}
            >
              삭제
            </RedButton>
          </>
        ) : (
          <>
            <S.EditInput {...inputProps} />
            <BlueButton>확인</BlueButton>
            <BlueButton
              isReversal
              onClick={(e) => {
                e.preventDefault();
                setIsEditMode(!isEditMode);
              }}
            >
              취소
            </BlueButton>
          </>
        )}
      </S.Container>
    </>
  );
};

export default TodoItem;

const S: any = {};

S.Container = styled.form`
  display: flex;
  width: 25rem;
  justify-content: space-between;
  align-items: center;
`;

S.DoneCheckBox = styled.input`
  margin: 0;
  width: 1rem;
`;

S.Content = styled.div<{ isCompleted: boolean }>`
  width: 15rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ isCompleted }) =>
    isCompleted
      ? css`
          text-decoration: line-through;
          color: #e2e2e2;
        `
      : null}
`;

S.EditInput = styled.input`
  box-sizing: border-box;
  height: 2rem;
  width: 15rem;
`;

S.DoneItem = styled.div``;
