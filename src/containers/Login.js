import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Votre mail"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Votre mot de passe"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default Login;
