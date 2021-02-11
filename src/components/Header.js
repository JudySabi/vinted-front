import logo from "../assets/img/vinted_logo.png";
import { Link } from "react-router-dom";

const Header = ({ setUser, userToken }) => {
  return (
    <div className="header">
      <img src={logo} alt="logo vinted" />
      <div>
        <nav>
          <ul>
            {userToken ? (
              <li onClick={() => setUser(null)}>Se déconnecter</li>
            ) : (
              <>
                <Link to="/user/signup">S'inscrire</Link>
                <Link to="/user/login">Se connecter</Link>
              </>
            )}
            <li>Vends tes articles</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
