import RawLogo from "../../reusable-ui/Logo";
import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";

function NavBar({ username }) {
  return (
    <NavBarStyled>
      <RawLogo />

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
`;
