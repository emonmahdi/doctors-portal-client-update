import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51MKy9LErpVrH8e4ZFUEjPUhmYxQ0ungPLPcFft74vsQXFszSZvaGH75nVwvuJEGxNDrRfWMdpQwKGKimXU5fn8Yh00eWGB4S0G"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;

  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  } 
  return (
    <div> 
      <div className="card w-96 bg-base-100 mx-auto shadow-xl mb-5">
        <div className="card-body">
          <p className="text-success font-bold">
            Hello! {appointment?.patientName}
          </p>
          <h2 className="card-title">Pay for <span className="text-primary">{appointment?.treatment}</span> </h2>
          <p>
            Your Appointment:{" "}
            <span className="text-orange-400">{appointment?.date}</span> at{" "}
            {appointment?.slot}
          </p>
          <p className="font-bold">Please pay: ${appointment?.price}</p>
           <div className="mt-8">
            <Elements stripe={stripePromise}>
              <CheckoutForm appointment={appointment} />
            </Elements>
           </div>
        </div>
      </div> 
    </div>
  );
};

export default Payment;
