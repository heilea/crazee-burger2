import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { theme } from "../../../theme/index";
import { IoChevronForward, IoPersonCircle } from "react-icons/io5";
import Input from "./Input";

function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Bonjour ${inputValue}`);
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1 className="title">Bienvenus chez nous !</h1>
      <hr />
      <h2 className="subtitle">Connectez-vous</h2>

      <Input
        value={inputValue}
        onChange={handleChange}
        placeholder={"Entrez votre prénom"}
        icon={IoPersonCircle}
        required
      />

      <div className="wrap-button">
        <button>Accéder à mon espace</button>
        <IoChevronForward className="chevron" />
      </div>
    </LoginFormStyled>
  );
}

export default LoginForm;

const LoginFormStyled = styled.form`
  //background-color: green;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid ${theme.colors.primary};
    margin-top: 32px;
    margin-bottom: 40px;
  }
  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P5};
  }

  h2 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P4};
    margin: 20px 10px 18px 10px;
  }

  .wrap-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.round};
    font-weight: ${theme.weights.bold};
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.white};
    padding: 18px 24px;
    margin-top: 18px;

    &:hover:not(:disabled) {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      transition: all 200ms ease-out;
    }

    &:active {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    button {
      font-family: "Open Sans", sans-serif;
      color: inherit;
      background: none;
      //width: 100%;
    }

    .chevron {
      color: inherit;
    }
  }
`;
