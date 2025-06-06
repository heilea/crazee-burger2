import { IoPersonCircle } from "react-icons/io5";
import { Link } from "react-router";
import styled from "styled-components";

function NavbarRightSide({ username }) {
  return (
    <RigthSideStyled>
      <div className="profile">
        <p>Hey, {username}</p>
        <Link to={"/"}>
          <button>Deconnexion</button>
        </Link>
      </div>
      {<IoPersonCircle className="icon" />}
    </RigthSideStyled>
  );
}

export default NavbarRightSide;

const RigthSideStyled = styled.div`
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
`;
