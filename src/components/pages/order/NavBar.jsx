import { Link } from "react-router";
import RawLogo from "../../reusable-ui/Logo";
import { IoPersonCircle } from "react-icons/io5";
import styled from "styled-components";

function NavBar({ username }) {
  return (
    <NavBarStyled>
      <div className="nav_left-side">
        <RawLogo />
      </div>
      <div className="nav_rigth-side">
        <div className="profile">
          <p>Hey, {username}</p>
          <Link to={"/"}>
            <button>Deconnexion</button>
          </Link>
        </div>
        {<IoPersonCircle className="icon" />}
      </div>
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

  .nav_left-side {
    background-color: pink;
    height: 100%; //MARCHAIT SANS LA DIV
    display: flex;
  }

  .nav_rigth-side {
    background: pink;
    display: flex;
    align-items: center;
    height: 100%; // Utile ?

    .profile {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .icon {
      color: #747b91;
    }
  }
`;
