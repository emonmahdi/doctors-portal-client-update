import React from "react";
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
      navigate('/appointment')
    }
   
  
    const onSubmit = async (data) => {
      console.log(data)
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name  });
      // console.log("update done");
     
    };
  
   /*  if (token) { 
      navigate('/appointment')
    }
   */
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
                className="input input-bordered w-full max-w-xs"
                {...register("name", { required: {
                  value: true,
                  message: "Name is Required"
                }}   
                )}
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
