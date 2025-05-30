import { Link, useParams } from "react-router";

function OrderPage() {
  const { userName } = useParams();

  return (
    <>
      <h1>Bonjour {userName}</h1>

      <Link to={"/"}>
        <button>Deconnexion</button>
      </Link>
    </>
  );
}

export default OrderPage;
