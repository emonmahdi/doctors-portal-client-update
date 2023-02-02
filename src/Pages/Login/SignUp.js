import React, { useState } from "react";
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const navigate = useNavigate();
      const [token] = useToken(user || gUser);

      const [role, setRole] = useState('patient');
      const [name, setName] = useState('');
      console.log(name);

    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    let signInError;
  
    if(loading || gLoading || updating){
      return <Loading />
    }
  
    if(error || gError || updateError){
      signInError = <p className="text-red-500">{error?.message || gError?.message || updateError.message}</p>
    }
  
    if(token){
      navigate('/appointment'); 
    }

    const userUpdateData = {
      displayName: name, 
      role: role  
  }
  console.log(userUpdateData);
    const onSubmit = async (data) => {
      console.log(data)
      console.log(data.name)
      console.log(data.role)
      
      await createUserWithEmailAndPassword(data?.email, data?.password);
      await updateProfile(userUpdateData);
      console.log("update done");
     
    };
   
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-3xl font-bold">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span> 
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full max-w-xs" 
                required
              />
              <label className="label">
                <small> 
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name?.message}</span> } 
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
                {...register("email", { required: {
                  value: true,
                  message: "Email is Required"
                }}, 
                {
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid Email'
                  }
                })}
              />
              <label className="label">
              {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span> }
              {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span> }
                
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span> 
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", { required: {
                  value: true,
                  message: "Password is Required"
                }}, 
                {
                  minLength: {
                    value:6,
                    message: 'Provide at least 6 character or longer'
                  }
                })}
              />
              <label className="label">
              {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password?.message}</span> }
              {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password?.message}</span> }
                
              </label>
            </div> 
 
            {signInError}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Account Type</span> 
              </label>
              <div className="flex items-center justify-start">
              <div className="flex items-center pr-8">
              <input
                type="radio"
                id="patient"
                name='role'
                value="patient" 
                placeholder="Your Password"
                className="input mr-1" 
                checked={role === 'patient'}
                onChange={(e) => setRole(e.target.value)}
              /> <label htmlFor="patient">Patient</label>
              </div>
              <div className="flex items-center">
              <input
                type="radio"
                id="doctor"
                name='role'
                value="doctor"
                placeholder="Your Password"
                className="input mr-1"
                checked={role === 'doctor'}
                onChange={(e) => setRole(e.target.value)}
              /> <label htmlFor="doctor">Doctor</label>
              </div>
              </div>
              
            </div>

            <input className="btn w-full max-w-xs" type="submit" value="Signup" />
          </form>
          <p><small>Already have an account? <Link to='/login' className="text-primary">Please Login</Link></small></p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
