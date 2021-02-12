import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { Range } from "react-range";
const axios = require("axios");

const Home = ({ filters }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  // const [minPrice, setMinPrice] = useState([40]);
  // const [maxPrice, setMaxPrice] = useState([100]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${filters.search}`
          // https://lereacteur-vinted-api.herokuapp.com/offers?title=${filters.search}
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
    <div className="home">
      {/* <div>IMG GIGANTESQUE</div> */}

      {/*<div>
        <Range
          step={1}
          min={0}
          max={500}
          values={[minPrice]}
          onChange={(values) => setMinPrice({ values })}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                width: "100%",
                backgroundColor: "#ccc",
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "42px",
                width: "42px",
                backgroundColor: "#999",
              }}
            />
          )}
        />
      </div> */}

      {loading ? (
        <span>en cours de chargement...</span>
      ) : (
        <>
          {data.offers.map((elem) => {
            // je récupère la marque du tableau product details pour pouvoir l'afficher plus bas
            const marque = Object.values(elem.product_details[0]);
            return (
              <Link to={`/offer/${elem._id}`}>
                <div key={elem._id} className="offerCard">
                  <div className="user">
                    {elem.owner.account.avatar && (
                      <img src={elem.owner.account.avatar.secure_url} alt="" />
                    )}
                    <p>{elem.owner.account.username}</p>
                  </div>

                  <img src={elem.product_image.secure_url} alt="" />
                  <p>{elem.product_price} €</p>
                  <p>{marque}</p>
                </div>
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
};
export default Home;
