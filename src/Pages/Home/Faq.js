import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import FaqList from "./FaqList";

const Faq = () => {
  // const [faqs, setFaqs] = useState([]);

  const { data: faqs, isLoading, refetch } = useQuery("faqs", () =>
  fetch("https://y-silk-zeta.vercel.app/faq", {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  }).then((res) => res.json())
);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto px-8 py-12">
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
        {/* Single FAQ */}
      
        {/* Single FAQ */}
       {/*  <div
          tabIndex={1}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3"
        >
          <div className="collapse-title text-xl font-medium">
          Which health screenings are recommended for me currently
          </div>
          <div className="collapse-content">
            <p>For most adults, depending on age, doctors will recommend a screening schedule that includes regular physical exams, body mass index (BMI), skin checks, cholesterol and blood pressure screening, eye exams, immunizations and screening for sexually transmitted diseases.</p>
          </div>
        </div> */}
        {/* Single FAQ */}
        {/* <div
          tabIndex={2}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3"
        >
          <div className="collapse-title text-xl font-medium">
            How important is health screening?
          </div>
          <div className="collapse-content">
            <p>Health screenings are an important part of maintaining good health, especially as you get older. Many deaths could be prevented if people got simple, regular health screenings as recommended by their doctor. Health screenings can detect problems early, when chances for successful treatment are greatest.</p>
          </div>
        </div> */}
        {/* Single FAQ */}
        {/* <div
          tabIndex={2}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3"
        >
          <div className="collapse-title text-xl font-medium">
          Why should medication be taken on time?
          </div>
          <div className="collapse-content">
            <p>Simply put, not taking your medicine as prescribed by a doctor or instructed by a pharmacist could lead to your disease getting worse, hospitalization, even death.</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Faq;
