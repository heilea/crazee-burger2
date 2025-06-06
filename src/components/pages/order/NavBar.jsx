import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../reusable-ui/Logo";
import { theme } from "../../../theme";
import { useNavigate } from "react-router";

function NavBar({ username }) {

const HomeClick =  useNavigate()
  
const handleClick = () =>{
  HomeClick()
}
  
  return (
    <NavBarStyled>
      <Logo style={"logo"} onClick={handleClick} />

      <NavbarRightSide username={username} />
    </NavBarStyled>
  );
}

export default NavBar;

const NavBarStyled = styled.nav`
  background-color: ${theme.colors.white};
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 20px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};

  .logo {
    height: 100%;
  }
`;
