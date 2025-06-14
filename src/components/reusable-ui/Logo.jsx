import styled from "styled-components";

import { theme } from "../../theme/index";

function Logo({ style, onClick }) {
  return (
    <LogoStyled className={style} onClick={onClick}>
      <p>Crazee</p> <img src="/assets/logo.png" alt="Logo Crazee Burger" />
      <p>Burger</p>
    </LogoStyled>
  );
}

export default Logo;

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  p {
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
