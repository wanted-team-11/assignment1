import { TodoContextProps } from "../../../context/useTodoContext";
import { fetchDeleteTodo } from "../../../services/api/todoAPI";
import { Todo } from "../../../services/model/todo";
import { useModalContext } from "../../../context/useModalContext";

const useDeleteTodo = ({ todos, setTodos }: TodoContextProps) => {
  const { openModal } = useModalContext();

  const handleDelete = (id: Todo["id"]) => {
    fetchDeleteTodo(id)
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => {
        openModal("삭제에 실패했습니다.");
      });
  };

  return { handleDelete };
};

export default useDeleteTodo;
