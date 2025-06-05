import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { theme } from "../../../theme/index";
import { IoChevronForward, IoPersonCircle } from "react-icons/io5";
import Input from "../../reusable-ui/Input";
import Button from "../../reusable-ui/Button";

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
        Icon={<IoPersonCircle className="icon" />}
        required
      />

      <Button
        label={"Accéder à mon espace"}
        Icon={<IoChevronForward className="chevron" />}
      ></Button>
    </LoginFormStyled>
  );
}

export default LoginForm;

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;
  color: ${theme.colors.white};

  hr {
    border: 1.5px solid #f56a2c;
    margin-top: 32px;
    margin-bottom: 40px;
  }
  h1 {
    font-size: ${theme.fonts.P5};
  }

  h2 {
    font-size: ${theme.fonts.P4};
    margin: 20px 10px 18px 10px;
  }
  .icon {
    font-size: 1.2em;

    color: ${theme.colors.greySemiDark};
    //min-width: 1em;
  }
  .chevron {
    color: inherit;
  }
`;
