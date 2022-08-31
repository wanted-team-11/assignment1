import { TodoContextProps } from "../../../context/useTodoContext";
import useInput from "../../../hooks/useInput";
import { fetchUpdateTodo } from "../../../services/api/todoAPI";
import { Todo } from "../../../services/model/todo";
import { useModalContext } from "../../../context/useModalContext";

const useEditTodo = ({ todos, setTodos }: TodoContextProps) => {
  const inputProps = useInput("");
  const { openModal } = useModalContext();

  const handleEdit = (newTodo: Todo) => {
    fetchUpdateTodo(newTodo)
      .then(() => {
        setTodos(
          todos.map((todo) => (todo.id === newTodo.id ? newTodo : todo))
        );
      })
      .catch((error) => {
        openModal("수정에 실패했습니다.");
      });
  };

  const initEditMode = (selectedItem: Todo) => {
    inputProps.setValue(selectedItem.todo);
  };

  return { inputProps, handleEdit, initEditMode };
};

export default useEditTodo;
