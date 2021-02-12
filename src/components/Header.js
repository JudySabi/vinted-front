import logo from "../assets/img/vinted_logo.svg";
import { Link } from "react-router-dom";

const Header = ({ setUser, userToken }) => {
  return (
    <div className="header">
      <img src={logo} alt="logo vinted" />
      <div>
        <nav>
          {userToken ? (
            <a onClick={() => setUser(null)} className="buttonDeconnect">
              Se déconnecter
            </a>
          ) : (
            <>
              <Link to="/user/signup">S'inscrire</Link>
              <Link to="/user/login">Se connecter</Link>
            </>
          )}
          <button>Vends tes articles</button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
