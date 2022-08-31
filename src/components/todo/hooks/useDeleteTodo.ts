import { TodoContextProps } from "../../../context/useTodoContext";
import { fetchDeleteTodo } from "../../../services/api/todoAPI";
import { Todo } from "../../../services/model/todo";

const useDeleteTodo = ({ todos, setTodos }: TodoContextProps) => {
  const handleDelete = (id: Todo["id"]) => {
    fetchDeleteTodo(id)
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { handleDelete };
};

export default useDeleteTodo;
