import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckOutForm />
    </Elements>
  );
};
export default Payment;
