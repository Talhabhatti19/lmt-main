import React, { useState } from "react";

import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import { Navigate, useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate =useNavigate()
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (elements == null) {
      return;
    }
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      return;
    }
    const res = await fetch("/create-intent", {
      method: "POST",
    });

    const { client_secret: clientSecret } = await res.json();

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Container maxWidth="xl">
      <Grid
        container
        xl={12}
        style={{ display: "flex ", justifyContent: "center",marginTop:"3rem" }}
      >
        <form onSubmit={handleSubmit}>
          <PaymentElement />
          <Button
          onClick={()=>{
            navigate("/login")
          }}
            variant="contained"
            type="submit"
            disabled={!stripe || !elements}
          >
            Pay
          </Button>
          {/* Show error message to your customers */}
          {errorMessage && <div>{errorMessage}</div>}
        </form>
      </Grid>
    </Container>
  );
};
export default CheckoutForm;
