import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { theme } from "../../../theme/index";
import { IoPersonCircle } from "react-icons/io5";
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
        <input
          type="text"
          value={userName}
          placeholder="Entrez votre prénom"
          onChange={handleChange}
          required
        />
        <button>Accéder à mon espace</button>
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
    margin: 20px 10px 10px;
  }

  .input-wrap {
    display: flex;
    flex-direction: column;
    gap: 18px;
    input {
      font-family: "Open Sans", sans-serif;

      color: #d3d3d3;
      background-color: ${theme.colors.background_white};
      font-size: ${theme.fonts.P0};
      border-radius: ${theme.borderRadius.round};
      font-weight: ${theme.weights.regular};
      padding: 18px 24px;
    }
    button {
      font-family: "Open Sans", sans-serif;

      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      font-size: ${theme.fonts.P0};
      border-radius: ${theme.borderRadius.round};
      font-weight: ${theme.weights.bold};
      padding: 18px 24px;
    }
  }
`;
