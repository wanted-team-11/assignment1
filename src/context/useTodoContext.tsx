import { createContext, Dispatch, ReactNode, useContext } from "react";
import { Todo } from "../services/model/todo";

export type TodoContextProps = {
  todos: Todo[];
  setTodos: Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoContext = createContext<TodoContextProps | null>(null);

const TodoProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: TodoContextProps;
}) => {
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === null) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};

export { TodoProvider, useTodoContext };
