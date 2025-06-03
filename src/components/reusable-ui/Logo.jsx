import styled from "styled-components";
import LogoCB from "../../assets/logo.png";
import { theme } from "../../theme/index";

function Logo() {
  return (
    <LogoStyled>
      <p>Crazee</p> <img src={LogoCB} alt="Logo Crazee Burger" /> <p>Burger</p>
    </LogoStyled>
  );
}

export default Logo;

const LogoStyled = styled.div`
  background: yellow;
  display: flex;
  align-items: center;

  p {
    font-family: "Amatic SC", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 6.875rem;
    color: ${theme.colors.primary};
  }
  img {
    width: 200px;
    height: 150px;
  }
`;
