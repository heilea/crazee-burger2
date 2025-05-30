import { useState } from "react";
import { useNavigate } from "react-router";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Bonjour ${userName}`);
    setUserName("");
    navigate(`order/${userName}`);
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenus chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        value={userName}
        placeholder="Entrez votre prénom ..."
        onChange={handleChange}
        required
      />
      <button>Accédez à votre espace</button>
    </form>
  );
}

export default LoginForm;
