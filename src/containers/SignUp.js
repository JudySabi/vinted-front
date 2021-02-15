import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [avatar, setAvatar] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [infosUser, setInfosUser] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  console.log(infosUser);

  const history = useHistory();

  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  formData.append("username", username);
  formData.append("avatar", avatar);

  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          formData
        );
        setInfosUser(response.data);
        history.push("/");
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
        <div>
          <label style={{ backgroundColor: "lightgray" }} htmlFor="file-upload">
            {" "}
            Ajouter une photo de profil
          </label>
          <input
            required
            id="file-upload"
            style={{ visibility: "hidden" }}
            type="file"
            onChange={(event) => {
              setAvatar(event.target.files[0]);
            }}
          />
        </div>
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
      {isLoading ? (
        <p>En cours de chargement</p>
      ) : (
        <>
          <img src={infosUser.url} alt={infosUser.avatar} />
        </>
      )}
    </div>
  );
};

export default SignUp;
