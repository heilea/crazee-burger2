import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { theme } from "../../../theme/index";
import { IoChevronForward, IoPersonCircle } from "react-icons/io5";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Bonjour ${userName}`);
    setUserName("");
    navigate(`order/${userName}`);
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1 className="title">Bienvenus chez nous !</h1>
      <hr />
      <h2 className="subtitle">Connectez-vous</h2>
      <div className="input-wrap">
        <IoPersonCircle className="icon" />
        <input
          type="text"
          value={userName}
          placeholder="Entrez votre prénom"
          onChange={handleChange}
          required
        />
      </div>
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

  .input-wrap {
    display: flex;
    align-items: center;

    font-family: "Open Sans", sans-serif;
    background-color: ${theme.colors.background_white};
    font-size: ${theme.fonts.P0};
    border-radius: ${theme.borderRadius.round};
    font-weight: ${theme.weights.regular};
    padding: 18px 24px;

    .icon {
      font-size: 15px;
      margin-right: 8px;
      color: ${theme.colors.greySemiDark};
      //min-width: 1em;
    }

    input {
      border: none;
      font-size: 15px;
      color: ${theme.colors.dark};
      background-color: ${theme.colors.background_white};
      //width:100%;
      //display: flex;
    }

    &::placeholder {
      background-color: ${theme.colors.background_white};
      color: ${theme.colors.greyLight};
    }
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
