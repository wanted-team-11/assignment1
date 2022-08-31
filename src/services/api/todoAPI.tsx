import axios from "axios";
import storage from "../../utils/storage";
import { Todo, TodoInput } from "../model/todo";

const instance = axios.create({
  baseURL: "https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com/todos/",
});

instance.interceptors.request.use(
  (config) => {
    const token = storage.get("TOKEN");
    if (!token) throw Error("no token");
    return { ...config, headers: { Authorization: `Bearer ${token}` } };
  },
  (error) => {
    return Promise.reject(error);
  }
);

const fetchGetTodos = () => {
  return instance.get("");
};

const fetchGetTodoById = (id: Todo["id"]) => {
  return instance.get(`${id}`);
};

const fetchCreateTodo = (props: TodoInput) => {
  return instance.post("", props);
};

const fetchUpdateTodo = (props: Todo) => {
  return instance.put(`${props.id}`, props);
};

const fetchDeleteTodo = (id: Todo["id"]) => {
  return instance.delete(`${id}`);
};

export {
  fetchGetTodos,
  fetchGetTodoById,
  fetchCreateTodo,
  fetchUpdateTodo,
  fetchDeleteTodo,
};
