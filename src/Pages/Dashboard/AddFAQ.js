import React, { useState } from "react";
import { toast } from "react-toastify";

const AddFAQ = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, desc)
        const faqData = {
            title: title,
            description: desc
        }
        fetch('https://y-silk-zeta.vercel.app/faq', {
            method: "POST",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': "application/json",
            },
            body: JSON.stringify(faqData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                toast.success('Faq added successfully')
                e.target.reset();
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }

  return (
    <>
      <h2 className="text-3xl text-black-500 font-bold text-center">
        Add FAQ{" "}
      </h2>

      <div className="border-2 border-teal-400 bg-white rounded-lg w-2/4 mx-auto p-4 my-4">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2 p-4 w-full  ">
          <input
            type="text"
            name="title"
            placeholder="Faq Title"
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full max-w-xs mb-1"
          />
          <textarea
            className="textarea lg:w-full max-w-xs mb-2 h-36 input input-bordered w-full"
            placeholder="Answer FAQ"
            name="desc"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <input
            type="submit"
            className="btn btn-md btn-primary w-fit"
            value="Submit"
          />
        </form>
      </div>
    </>
  );
};

export default AddFAQ;
