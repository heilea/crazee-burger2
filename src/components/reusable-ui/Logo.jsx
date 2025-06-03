import styled from "styled-components";
import LogoCB from "../../assets/logo.png";
import { theme } from "../../theme/index";

function Logo() {
  return (
    <LogoStyled>
      <h1>Crazee</h1> <img src={LogoCB} alt="Logo Crazee Burger" />
      <h1>Burger</h1>
    </LogoStyled>
  );
}

export default Logo;

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  transform: scale(2.5);

  h1 {
    display: inline;
    text-align: center;
    text-transform: uppercase;
    line-height: 1em;
    letter-spacing: 1.5px;

    font-family: "Amatic SC", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.primary};
  }
  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 5px;
  }
`;
