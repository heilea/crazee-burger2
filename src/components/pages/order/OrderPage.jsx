import { Link, useParams } from "react-router";
import styled from "styled-components";
import RawLogo from "../../reusable-ui/Logo";
import { IoPersonCircle } from "react-icons/io5";

function OrderPage() {
  const { userName } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <nav>
          {<SmallLogo />}
          <div className="profile">
            <div className="wrap">
              <p>Hey, {userName}</p>
              <Link to={"/"}>
                <button>Deconnexion</button>
              </Link>
            </div>
            {<IoPersonCircle className="icon" />}
          </div>
        </nav>
      </div>
      <div className="main"></div>
    </OrderPageStyled>
  );
}

export default OrderPage;

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  display: flex;
  justify-content: center;

  .container {
    background: purple;
    width: 1400px;

    nav {
      background-color: blue;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        color: pink;
        display: block;
      }

      .profile {
        background: red;
        display: flex;
        align-items: center;

        .wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .icon {
          color: #747b91;
        }
      }
    }
  }
`;

const SmallLogo = styled(RawLogo)`
  transform: scale(0.4); //Trying to size down Logo by inversing it
  width: 200px;
`;
