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
      {loading ? (
        <span>en cours de chargement...</span>
      ) : (
        <div>
          <div>IMG GIGANTESQUE</div>
          {data.offers.map((elem) => {
            return (
              <Link elem={elem} to={`/offer/${elem._id}`}>
                <div key={elem._id}>
                  {elem.owner.account.avatar && (
                    <img src={elem.owner.account.avatar.secure_url} alt="" />
                  )}

                  <img src={elem.product_image.secure_url} alt="" />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Home;
