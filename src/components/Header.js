import logo from "../assets/img/vinted_logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo vinted" />
      <div>
        <nav>
          <ul>
            <li>S'inscrire | Se connecter</li>
            <li>Vends tes articles</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
