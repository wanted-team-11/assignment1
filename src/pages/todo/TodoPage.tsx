import TodoContainer from "../../components/todo/TodoContainer";
import CenterContainer from "../../components/layout/CenterContainer";
import Header from "../../components/layout/Header";

const TodoPage = () => {
  return (
    <>
      <Header />
      <CenterContainer>
        <TodoContainer />
      </CenterContainer>
    </>
  );
};

export { TodoPage };
