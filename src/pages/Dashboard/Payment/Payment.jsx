import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const Payment = ({ refetch }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckOutForm refetch={refetch} />
    </Elements>
  );
};
import PropTypes from 'prop-types';

Payment.propTypes = {
  refetch: PropTypes.func.isRequired,
};
export default Payment;
