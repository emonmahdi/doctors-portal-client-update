import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { format } from "date-fns";


const AddBlog = () => { 
  const [user] = useAuthState(auth); 

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("service", () =>
    fetch("https://y-silk-zeta.vercel.app/service").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
 

  const imageStorageKey = "86d7ede8a06ce13e801bf7d5c3eeaa9a";

  const todayDate = new Date();

  const formattedDate = format( todayDate, 'PP')
  console.log(formattedDate);

  const onSubmit = async (data) => { 
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const blog = {
            title: data.title,
            email: data.email,
            date: formattedDate,
            img: img,
            description: data.description,
          };
          // send to your database
          fetch("https://y-silk-zeta.vercel.app/blog", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(blog),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Blog added successfully");
                reset();
              } else {
                toast.error("Failed Blog added");
              }
            });
        }
      });
    /* const image = data?.image[0];
    
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
     */
  };

  return (
    <>

      <h2 className="text-3xl text-black-500 font-bold text-center">
        Add Blog{" "}
      </h2> 
      <div className="border-2 border-teal-400 bg-white rounded-lg w-3/3 mx-auto p-2 my-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-around ">
            <div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-screen max-w-xs"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "Title is Required",
                    },
                  })}
                />
                <label className="label">
                  <small>
                    {errors.title?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.title?.message}
                      </span>
                    )}
                  </small>
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email" 
                  defaultValue={user?.email}
                  className="input input-bordered w-full max-w-xs"
                  {...register(
                    "email",
                    {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                    },
                    {
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                    }
                  )}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              {/* ============== */}

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">Description</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Your Description"
                  className="input input-bordered w-full max-w-xs h-28"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Description is Required",
                    },
                  })}
                ></textarea>
                <label className="label">
                  <small>
                    {errors.description?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.description?.message}
                      </span>
                    )}
                  </small>
                </label>
              </div>

             
            </div>
            <div>
               {/* ============== */}
              {/*  <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">Date</span>
                </label>
                <input
                  type="date"
                  defaultValue={todayDate}
                  className="input input-bordered w-full max-w-xs"
                  {...register("date", {
                    required: {
                      value: true,
                      message: "Date is Required",
                    },
                  })}
                />
              </div> */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">Photo</span>
                </label>
                <input
                  type="file"
                  className="input input-bordered w-full max-w-xs"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Image is Required",
                    },
                  })}
                />
                <label className="label">
                  <small>
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name?.message}
                      </span>
                    )}
                  </small>
                </label>
              </div>

              <input
                className="btn w-full max-w-xs"
                type="submit"
                value="Add"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
