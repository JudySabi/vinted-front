import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const axios = require("axios");

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
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
    <>
      {loading ? (
        <span>en cours de chargement...</span>
      ) : (
        <div className="offer">
          <img src={data.product_image.secure_url} alt="" />
          <div className="card">
            <div className="topCard">
              <p>{data.product_price} €</p>
              {/* AFFICHE MES PRODUCTS_DETAILS : */}
              {data.product_details.map((elem, index) => {
                const keys = Object.keys(elem);
                const elems = Object.values(elem);
                return (
                  <div key={index}>
                    <span>{keys}</span>
                    <span>{elems}</span>
                  </div>
                );
              })}
            </div>

            <div className="divider"></div>

            <div className="bottomCard">
              <h1>{data.product_name}</h1>
              <p>{data.product_description}</p>

              <div className="user">
                <img src={data.owner.account.avatar.secure_url} alt="" />
                <p>{data.owner.account.username}</p>
              </div>
              <button>Acheter</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Offer;
