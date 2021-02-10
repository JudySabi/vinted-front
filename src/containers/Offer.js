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
  console.log(data);
  return (
    <>
      {loading ? (
        <span>en cours de chargement...</span>
      ) : (
        <div className="offer">
          <img src={data.product_image.secure_url} alt="" />
          <div>
            <div>{data.product_price}</div>
            <div>{data.product_name}</div>

            <div>{data.product_details[0].MARQUE}</div>
            <div>{data.product_details[1].ÉTAT}</div>
            <div>{data.product_details[2].COULEUR}</div>
            <div>{data.product_details[3].EMPLACEMENT}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Offer;
