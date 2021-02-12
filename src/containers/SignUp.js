import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [infosUser, setInfosUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          { email: email, password: password, username: username }
        );
        setInfosUser(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  };
  console.log(infosUser);

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Choisissez un pseudo"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="email"
          placeholder="Adresse email"
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">S'inscrire</button>
        <Link to="/user/login">
          <span className="linkLogSign">
            Tu as déjà un compte ? Connecte-toi !
          </span>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
