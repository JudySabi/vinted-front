import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [data, setData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/login"
        );
        if (email && password) {
          const token = response.token;
          console.log(token);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

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
