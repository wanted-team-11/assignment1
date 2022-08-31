import { FormEvent } from "react";
import { TodoContextProps } from "../../../context/useTodoContext";
import useInput from "../../../hooks/useInput";
import { fetchCreateTodo } from "../../../services/api/todoAPI";

const useCreateTodo = ({ todos, setTodos }: TodoContextProps) => {
  const inputProps = useInput("");

  const handleCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputProps.value) return null;
    fetchCreateTodo({ todo: inputProps.value })
      .then((response) => {
        setTodos([...todos, response.data]);
        inputProps.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { inputProps, handleCreate };
};

export default useCreateTodo;
