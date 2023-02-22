import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'

const UpdateDoctor = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();
    const {Id} = useParams();

    const [doctor, setDoctor] = useState('');
    
    useEffect(() => {
        fetch(`http://localhost:5000/doctors/${Id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setDoctor(data)
        })
    } ,[]);

    const onSubmit = async (data) => {

    }

    const { data: services, isLoading } = useQuery("service", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  return (
    <div>
      <h2>Update doctor {Id}</h2>
      <h2 className="text-3xl text-black-500 font-bold text-center">
        Update Doctor{" "}
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
                  defaultValue={doctor.name}
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
                  defaultValue={doctor.email}
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
                  defaultValue={doctor.specialty}
                >
                  {services?.map((service) => (
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

    </div>
  )
}

export default UpdateDoctor
