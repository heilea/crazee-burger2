import styled from "styled-components";
import Profile from "./Profile";

function NavbarRightSide({ username }) {
  return (
    <RigthSideStyled>
      <div className="admin-button">Admin Button</div>
      <Profile username={username} />
    </RigthSideStyled>
  );
}

export default NavbarRightSide;

const RigthSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  gap: 60px;
  height: 100%; // Utile ?

  .admin-button {
  }

  .icon {
    color: #747b91;
  }
`;
