import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const token = Cookies.get("userToken");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);

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
          title: "title",
          amount: 1000,
        }
      );
      console.log(response.status);
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
          {/* Input avec le numéro de CB + CCV */}
          <CardElement />
          <button type="submit">Valider</button>
        </form>
      ) : (
        <span>{succeeded}</span>
      )}
    </>
  );
};

export default CheckoutForm;