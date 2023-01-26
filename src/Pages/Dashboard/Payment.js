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
  const url = `https://y-silk-zeta.vercel.app/booking/${id}`;

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
      <h2 className="text-2xl text-purple-500">Please pay for {id}</h2>
      <div className="card w-96 bg-base-100 shadow-xl mb-5">
        <div className="card-body">
          <p className="text-success font-bold">
            Hello! {appointment?.patientName}
          </p>
          <h2 className="card-title">Pay for {appointment?.treatment}</h2>
          <p>
            Your Appointment:{" "}
            <span className="text-orange-400">{appointment?.date}</span> at{" "}
            {appointment?.slot}
          </p>
          <p>Please pay: ${appointment?.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
