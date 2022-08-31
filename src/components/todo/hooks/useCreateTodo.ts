import { FormEvent } from "react";
import { TodoContextProps } from "../../../context/useTodoContext";
import useInput from "../../../hooks/useInput";
import { fetchCreateTodo } from "../../../services/api/todoAPI";
import { useModalContext } from "../../../context/useModalContext";

const useCreateTodo = ({ todos, setTodos }: TodoContextProps) => {
  const inputProps = useInput("");
  const { openModal } = useModalContext();

  const handleCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputProps.value) return null;
    fetchCreateTodo({ todo: inputProps.value })
      .then((response) => {
        setTodos([...todos, response.data]);
        inputProps.reset();
      })
      .catch((error) => {
        openModal("Todo 생성에 실패했습니다.");
      });
  };

  return { inputProps, handleCreate };
};

export default useCreateTodo;
