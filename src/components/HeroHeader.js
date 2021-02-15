import heroHeader from "../assets/img/hero-header.jpeg";
import bandeauSVG from "../assets/img/bandeauBas.svg";
import { Link } from "react-router-dom";

const HeroHeader = ({ userToken }) => {
  return (
    <>
      <div
        className="hero-header"
        style={{ backgroundImage: `url(${heroHeader})` }}
      >
        <div className="modal-hero">
          <h1>Prêts à faire du tri dans vos placards ?</h1>
          {userToken ? (
            <Link to="/publish">
              <button>Commencer à vendre</button>
            </Link>
          ) : (
            <Link to="/user/signup">
              <button>Commencer à vendre</button>
            </Link>
          )}
        </div>
        <img className="bandeauSVG" src={bandeauSVG} alt={bandeauSVG} />
      </div>
    </>
  );
};

export default HeroHeader;
