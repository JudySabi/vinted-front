import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const axios = require("axios");

const Home = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      {/* <div>IMG GIGANTESQUE</div> */}
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
