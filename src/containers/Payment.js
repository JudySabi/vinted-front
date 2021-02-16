import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="payment">
      <Elements stripe={stripePromise}>
        {/* Tous les enfants de Elements ont accès à Stripe */}
        <CheckoutForm
          title={location.state.product_name}
          amount={location.state.product_price}
        />
      </Elements>
    </div>
  );
};
export default Payment;
