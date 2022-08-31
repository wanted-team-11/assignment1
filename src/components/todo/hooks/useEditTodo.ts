import { TodoContextProps } from "../../../context/useTodoContext";
import useInput from "../../../hooks/useInput";
import { fetchUpdateTodo } from "../../../services/api/todoAPI";
import { Todo } from "../../../services/model/todo";

const useEditTodo = ({ todos, setTodos }: TodoContextProps) => {
  const inputProps = useInput("");

  const handleEdit = (newTodo: Todo) => {
    fetchUpdateTodo(newTodo)
      .then(() => {
        setTodos(
          todos.map((todo) => (todo.id === newTodo.id ? newTodo : todo))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const initEditMode = (selectedItem: Todo) => {
    inputProps.setValue(selectedItem.todo);
  };

  return { inputProps, handleEdit, initEditMode };
};

export default useEditTodo;
