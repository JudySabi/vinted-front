import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// COMPONENTS
import IdOffer from "../components/IdOffer";
import Filters from "../components/Filters";
const axios = require("axios");

const Home = ({ filters, setFilters }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const sortAscDesc = filters.sortPrice ? "price-asc" : "price-desc"; // permet de mettre le query correspondant a true ou a false
  console.log(sortAscDesc); // me retourne 3 console.log dans ma console ??

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers`
          // `https://lereacteur-vinted-api.herokuapp.com/offers?priceMin=${filters.priceMin}&priceMax=${filters.priceMax}`
          // `https://lereacteur-vinted-api.herokuapp.com/offers?sort=${sortAscDesc}`
          // `https://lereacteur-vinted-api.herokuapp.com/offers?title=${filters.search}`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [filters]);

  return (
    <>
      {/* <div>IMG GIGANTESQUE</div> */}
      {/* <div>BANDEAU FILTERS</div> */}
      {/* <Link to={`/offer?sort=${filters.sort}`}> */}
      <Filters filters={filters} setFilters={setFilters} />
      {/* </Link> */}

      {/* Permet de m'envoyer le résultat lors du clique sur une annonce */}
      <div className="homeOffer">
        {loading ? (
          <span>en cours de chargement...</span>
        ) : (
          <>
            {data.offers.map((elem) => {
              return (
                <Link to={`/offer/${elem._id}`}>
                  <IdOffer elem={elem} />
                </Link>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};
export default Home;
