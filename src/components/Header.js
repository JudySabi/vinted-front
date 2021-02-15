import logo from "../assets/img/vinted_logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ setUser, userToken, filters, setFilters }) => {
  // const [search, setSearch] = useState("");

  // onChange de l'input search
  const handleSearch = (event) => {
    const newFilters = { ...filters };
    newFilters.search = event;
    setFilters(newFilters);
  };
  // console.log(search);

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo vinted" />
      </Link>
      <input
        type="text"
        placeholder="Rechercher des articles"
        value={filters.search}
        onChange={(elem) => handleSearch(elem.target.value)}
      />
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
          {/* faire si l'utilisateur n'est pas connecté alors il passe sur la page login */}
          <Link to="/publish">
            <button>Vends tes articles</button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
