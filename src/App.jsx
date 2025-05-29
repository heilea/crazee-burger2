import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Bonjour " + name);
    setName("");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>Bienvenus chez nous!</h1>
      <h2>Connectez-vous</h2>

      <form action="submit" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={name}
          type="text"
          placeholder="Entrez votre prénom ..."
          required
        />
        <button>Accéder à votre espace</button>
      </form>
    </div>
  );
}

export default App;
