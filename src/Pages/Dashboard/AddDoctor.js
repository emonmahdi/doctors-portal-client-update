import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("service", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  const imageStorageKey = "86d7ede8a06ce13e801bf7d5c3eeaa9a";

  const onSubmit = async (data) => {
    console.log(data);
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
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
            description: data.description,
          };
          // send to your database
          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor added successfully");
                reset();
              } else {
                toast.error("Failed doctor added a doctor");
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
        Add Doctor{" "}
      </h2>

      <div className="border-2 border-teal-400 bg-white rounded-lg w-3/3 mx-auto p-2 my-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-around ">
            <div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-screen max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
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

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
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
               <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">Specialty</span>
                </label>
                <select
                  {...register("specialty")}
                  className="select input-bordered w-full max-w-xs border"
                >
                  {services.map((service) => (
                    <option key={service._id} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
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

export default AddDoctor;
