import React, { useEffect, useRef } from "react";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const Login = () => {
  const emailRef = useRef('')
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
      auth
    );
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";
  const [token] = useToken(user || gUser)

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
   }, [token, from, navigate])

  /*  if(user || gUser){
    navigate(from, { replace: true });
   } */

  let signInError;

  if (loading || gLoading) {
    return <Loading />;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-500">{error?.message || gError?.message}</p>
    );
  }

 /*  if(token){
    navigate('/appointment')
  } */
 
  const resetEmail = async (e) => {
    const email = emailRef.current.value;
    console.log(email);
    if(email){
      await sendPasswordResetEmail(email);
      console.log('send email');
    }
    else{
      console.log('send reset password email');
    }
  }

  const onSubmit = (data) => { 
    signInWithEmailAndPassword(data.email, data.password);
  };

 

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-3xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                ref={emailRef}
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register(
                  "password",
                  {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                  },
                  {
                    minLength: {
                      value: 6,
                      message: "Provide at least 6 character or longer",
                    },
                  }
                )}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password?.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password?.message}
                  </span>
                )}
              </label>
            </div>

            {signInError}
            <input
              className="btn w-full max-w-xs"
              type="submit"
              value="Login"
            />
          </form>
          <p>
            <small>
              New to doctors portal{" "}
              <Link to="/signup" className="text-primary">
                Create new account
              </Link>
            </small>
          </p>
          <p onClick={resetEmail} className='text-secondary cursor-pointer'>
            <small>
              Forgot Password 
            </small>
          </p>
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
  );
};

export default Login;
