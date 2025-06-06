import { useParams } from "react-router";
import styled from "styled-components";
import NavBar from "./NavBar";
import Main from "./Main";

function OrderPage() {
  const { userName } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar username={userName} />
        <Main />
      </div>
    </OrderPageStyled>
  );
}

export default OrderPage;

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: purple;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
  }
`;
