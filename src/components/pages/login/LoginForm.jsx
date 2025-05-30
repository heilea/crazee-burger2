import { useState } from "react";

function LoginForm() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${name}`);
    setName("");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenus chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        value={name}
        placeholder="Entrez votre prénom ..."
        onChange={handleChange}
        required
      />
      <button>Accédez à votre espace</button>
    </form>
  );
}

export default LoginForm;
