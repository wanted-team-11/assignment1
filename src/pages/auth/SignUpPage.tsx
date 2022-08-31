import Signup from "../../components/auth/Signup";
import CenterContainer from "../../components/layout/CenterContainer";
import Header from "../../components/layout/Header";

const SignUpPage = () => {
  return (
    <>
      <Header />
      <CenterContainer>
        <Signup />
      </CenterContainer>
    </>
  );
};

export { SignUpPage };
