import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CheckoutForm = ({appointment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const {_id, price, patient, patientName} = appointment;

    useEffect(() => {
        fetch(`http://localhost:5000/create-payment-intent`, {
            method:"POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            body: JSON.stringify({price})  
        })
        .then(res => res.json())
        .then(data => {
            if(data?.clientSecret){
                setClientSecret(data.clientSecret)
            }
        })

    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
 
        setCardError(error?.message || "");
        setSuccess('');
        setProcessing(true);
        // confirm card payment
        const {paymentIntent, intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email: patient
                },
              },
            },
          );

          if(intentError){ 
            setCardError(intentError?.message);
            setProcessing(false)
          }else{
            setCardError('');
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent);
            setSuccess('Congrats! Your payment is success');

            // store to database payment

            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id
            }

            fetch(`http://localhost:5000/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
            .then(data => {
                setProcessing(false)
                console.log(data);
            })

          }

    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-success btn-sm mt-5" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {
        cardError && <p className="text-red-500">{cardError}</p>
      }
      {
        success && <div className="text-green-500">
            <p>{success}</p>
            <p>Your Transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
        </div>
      }
    </div>
  );
};

export default CheckoutForm;
