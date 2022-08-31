import { FormEvent } from "react";
import { TodoContextProps } from "../../../context/useTodoContext";
import useInput from "../../../hooks/useInput";
import {
  fetchCreateTodo,
  fetchDeleteTodo,
  fetchUpdateTodo,
} from "../../../services/api/todoAPI";
import { Todo } from "../../../services/model/todo";

const useTodo = ({ todos, setTodos }: TodoContextProps) => {
  const inputCreateTodo = useInput("");
  const inputEditTodo = useInput("");

  const handleCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputCreateTodo.value) return alert("빈 칸을 채워주세요");
    fetchCreateTodo({ todo: inputCreateTodo.value })
      .then((response) => {
        setTodos([...todos, response.data]);
        inputCreateTodo.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = async (newTodo: Todo) => {
    await fetchUpdateTodo(newTodo)
      .then(() => {
        setTodos(
          todos.map((todo) => (todo.id === newTodo.id ? newTodo : todo))
        );
      })
      .catch((error) => {
        if (error.response.data.statusCode === 400)
          return alert(error.response.data.message);
      });
  };

  const initEditMode = (selectedItem: Todo) => {
    inputEditTodo.setValue(selectedItem.todo);
  };

  const handleDelete = (id: Todo["id"]) => {
    fetchDeleteTodo(id)
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  return {
    inputCreateTodo,
    inputEditTodo,
    handleCreate,
    handleEdit,
    initEditMode,
    handleDelete,
  };
};

export default useTodo;
