import { useNavigate } from "react-router";

function OrderPage() {
  const navigate = useNavigate();

  return (
    <>
      <div>OrderPage</div>
      <button onClick={() => navigate("/")}>Deconnexion</button>
    </>
  );
}

export default OrderPage;
