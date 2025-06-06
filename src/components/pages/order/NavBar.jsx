import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../reusable-ui/Logo";

function NavBar({ username }) {
  return (
    <NavBarStyled>
      <Logo style={"logo"} />

      <NavbarRightSide username={username} />
    </NavBarStyled>
  );
}

export default NavBar;

const NavBarStyled = styled.nav`
  background-color: blue;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 20px;

  .logo {
    height: 100%;
  }
`;
