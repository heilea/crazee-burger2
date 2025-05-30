import { useNavigate } from "react-router";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/")}>Retour a la page d'acceuil</button>
    </>
  );
}

export default ErrorPage;
