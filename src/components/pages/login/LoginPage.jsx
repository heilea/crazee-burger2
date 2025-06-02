import styled from "styled-components";
import LoginForm from "./LoginForm";
import bgImage from "../../../assets/burger-background.jpg";

function LoginPage() {
  return (
    <LoginPageStyled>
      <LoginForm />
    </LoginPageStyled>
  );
}

export default LoginPage;

const LoginPageStyled = styled.div`
  background-color: red;
  //background-image: url(${bgImage});
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
`;
