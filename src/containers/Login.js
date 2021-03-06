import axios from "axios";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/login",
          { email: email, password: password }
        );

        setUser(response.data.token);
        history.push("/");
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  };
  console.log(setUser);
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Se connecter</button>
        <Link to="/user/signup">
          <span className="linkLogSign">
            Pas encore de compte ? Inscris-toi !
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
