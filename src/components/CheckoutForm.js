import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const token = Cookies.get("userToken");

const CheckoutForm = ({ title, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const price = Number.parseFloat(amount).toFixed(2);
  const fraisProtection = Number.parseFloat((price * 10) / 100).toFixed(2);
  const fraisPort = Number.parseFloat((price * 20) / 100).toFixed(2);
  const total = Number(price) + Number(fraisPort) + Number(fraisProtection);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElements = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElements, {
        name: token, // recupérer l'id du token ?
      });

      const stripeToken = stripeResponse.token.id;
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: title,
          amount: amount,
        }
      );
      console.log(response.data.status);
      if (response.data.status === "succeeded") {
        setSucceeded(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {!succeeded ? (
        <form onSubmit={handleSubmit}>
          <h3>Résumé de la commande</h3>
          <div className="resume-commande">
            <div>
              <p>Commande</p> <span>{price} €</span>
            </div>
            <div>
              <p>Frais protection acheteurs</p>
              <span>{fraisProtection} €</span>
            </div>
            <div>
              <p>Frais de port</p> <span>{fraisPort} €</span>
            </div>
          </div>
          <div className="total">
            <div>
              <div>
                <p>Total</p>
                <span>{total} €</span>
              </div>

              <p className="phrase-final">
                Il ne vous reste plus qu'un étape pour vous offrir{" "}
                <span>{title}</span>. Vous allez payer <span>{total} € </span>
                (frais de protection et frais de port inclus).
              </p>
            </div>
          </div>

          <CardElement />
          <button type="submit">Payer</button>
        </form>
      ) : (
        <span>Paiement validé !</span>
      )}
    </>
  );
};

export default CheckoutForm;
