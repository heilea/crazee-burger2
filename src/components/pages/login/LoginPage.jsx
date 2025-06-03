import styled from "styled-components";
import LoginForm from "./LoginForm";
import bgImage from "../../../assets/burger-background.jpg";
import Logo from "../../reusable-ui/Logo";

function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  );
}

export default LoginPage;

const LoginPageStyled = styled.div`
  //background-color: red;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100dvh;

  ::before {
    content: "";
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
