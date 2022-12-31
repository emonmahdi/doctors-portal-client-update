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
    reset
  } = useForm();

  const { data: services, isLoading } = useQuery("service", () =>
    fetch("https://doctors-portal-app.onrender.com/service").then((res) => res.json())
  );

  if(isLoading){
    return <Loading />
  }

  const imageStorageKey = '86d7ede8a06ce13e801bf7d5c3eeaa9a'

  const onSubmit = async (data) => {
    console.log(data)
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
            method:'POST',
            body: formData
        }).then(res => res.json())
        .then(result => {
             if(result.success){
              const img = result.data.url;
              const doctor = {
                name: data.name,
                email: data.email,
                specialty: data.specialty,
                img: img
              }
              // send to your database
              fetch('https://doctors-portal-app.onrender.com/doctor', {
                method: 'POST',
                headers:{
                  'content-type':'application/json',
                  authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body:JSON.stringify(doctor)
              }).then(res => res.json())
              .then(inserted => {
                if(inserted.insertedId){
                  toast.success('Doctor added successfully');
                  reset();
                }else{
                  toast.error('Failed doctor added a doctor')
                }
              })
             }
        })
    /* const image = data?.image[0];
    
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
     */
  };

  return (
    <div>
      <h3 className="text-2xl text-purple-300">Add a New Doctor</h3>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
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
            <span className="label-text">Email</span>
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

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select {...register('specialty')} className="select input-bordered w-full max-w-xs border"> 
          {
            services.map(service => <option 
            key={service._id}
            value={service.name}
            >{service.name}</option>)
          }
             
          </select> 
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
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

        <input className="btn w-full max-w-xs" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddDoctor;
