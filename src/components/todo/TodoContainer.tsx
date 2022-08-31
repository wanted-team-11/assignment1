import { useEffect, useState } from "react";
import styled from "styled-components";
import { TodoProvider } from "../../context/useTodoContext";
import { fetchGetTodos } from "../../services/api/todoAPI";
import { Todo } from "../../services/model/todo";
import ModalPortal from "../../utils/Portal";
import Modal from "../common/Modal";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isError, setIsError] = useState(false);

  const handleModal = () => setIsError(false);

  useEffect(() => {
    fetchGetTodos()
      .then((response) => {
        setTodos(response.data);
        // throw Error(); 에러 테스팅
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  return (
    <>
      <ModalPortal>
        {isError && (
          <Modal
            onClose={handleModal}
            content="할 일을 받아오지 못했습니다. 다시 시도해주세요."
          />
        )}
      </ModalPortal>
      <TodoProvider value={{ todos, setTodos }}>
        <h2>Todo List</h2>
        <TodoInput />
        <S.ItemContainer>
          {todos.length === 0 ? (
            <div>할 일이 없습니다. 😎 </div>
          ) : (
            <>
              {todos.map(({ id, ...props }) => (
                <S.ItemWrapper key={id}>
                  <TodoItem id={id} {...props} />
                </S.ItemWrapper>
              ))}
            </>
          )}
        </S.ItemContainer>
      </TodoProvider>
    </>
  );
};

export default TodoContainer;

const S: any = {};

S.ItemContainer = styled.div`
  margin-top: 1.5rem;
`;

S.ItemWrapper = styled.div`
  margin-top: 0.5rem;
`;
