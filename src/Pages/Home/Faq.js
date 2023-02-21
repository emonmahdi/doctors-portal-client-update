import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import FaqList from "./FaqList";

const Faq = () => {
  // const [faqs, setFaqs] = useState([]);

  const { data: faqs, isLoading, refetch } = useQuery("faqs", () =>
  fetch("http://localhost:5000/faq", {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  }).then((res) => res.json())
);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mx-auto px-8 py-12 bg-gray-300">
      <div className="title-top text-center">
        <h2 className="text-md font-bold text-primary">FAQ {faqs?.length}</h2>
        <h3 className="text-3xl font-bold text-black">
          Frequently Asked Questions
        </h3>
      </div>
      <div className="faq-content w-2/4 mx-auto my-8">
        {
          faqs.map((faq, index) => <FaqList
          key={faq._id}
          faq={faq}
          index={index}
          ></FaqList>)
        } 
      </div>
    </div>
  );
};

export default Faq;
