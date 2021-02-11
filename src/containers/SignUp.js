import axios from "axios";
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Choisissez un pseudo"
        onChange={(event) => setUsername(event.target.value)}
      />
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
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default SignUp;
