// import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";

// console.log(location);
const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = () => {
  // const location = useLocation();
  return (
    <div className="payment">
      <Elements stripe={stripePromise}>
        {/* Tous les enfants de Elements ont accès à Stripe */}
        <CheckoutForm />
      </Elements>
    </div>
  );
};
export default Payment;
