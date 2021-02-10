import { Link } from "react-router-dom";
const axios = require("axios");

const Home = () => {
  axios
    .get("https://lereacteur-vinted-api.herokuapp.com/offers")
    .then((response) => {});

  return (
    <div className="home">
      <div>IMG GIGANTESQUE</div>
      <div>{response.data.offers}</div>
    </div>
  );
};
export default Home;
