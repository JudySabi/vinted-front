import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// PAYMENT :
// Récupère la clé publique du réacteur
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
  }, [id]);

  return (
    <>
      {loading ? (
        <span>en cours de chargement...</span>
      ) : (
        <div className="offer">
          {/* ERREUR VIENT D'ICI SELON LA CONSOLE */}

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
                {/* si la personne n'a pas d'avatar */}
                {data.owner.account.avatar && (
                  <img src={data.owner.account.avatar.secure_url} alt="" />
                )}
                <p>{data.owner.account.username}</p>
              </div>
              <Link to={{ pathname: "/payment", state: data }}>
                <button>Acheter</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Offer;
