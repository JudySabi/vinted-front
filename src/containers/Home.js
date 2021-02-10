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
  }, [data]);

  return (
    <div className="home">
      {loading ? (
        <span>en cours de chargement...</span>
      ) : (
        <div>
          <div>IMG GIGANTESQUE</div>
          {data.offers.map((elem, index) => {
            console.log(elem.product_pictures[index].secure_url);
            return (
              <div key={elem._id}>
                <img src={elem.product_pictures[0].secure_url} alt="" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Home;
