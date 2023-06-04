import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import useTitle from "../Hook/useTitle";
import { ToastContainer, toast } from "react-toastify";

const SignIn = () => {
  useTitle("SignIn");
  const { googleSignIn, signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        toast("Sign in Successfully");
        console.log(user);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  // Google login handel
  const handelGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        toast("Sign in Successfully");
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="card lg:w-1/3 mx-auto shadow-2xl my-14">
      <div className="card-body">
        <h2 className="text-2xl font-bold border-b w-1/2 border-orange">
          Please Sign In
        </h2>
        <form onSubmit={handleSignIn}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered"
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your Password"
              className="input input-bordered"
              name="password"
            />
          </div>
          <input
            className="bg-sky-400 w-full rounded-lg p-3 text-white font-semibold mt-3"
            type="submit"
            value="Sign In"
          />
        </form>
        <p className="mt-4">
          Don't have an account?{" "}
          <Link className="text-orange " to="/signup">
            Please Sign Up
          </Link>
        </p>

        <div className="divider">OR</div>
        <div className="text-center w-full">
          <p className="font-bold">Sign In with:</p>
          <div className="w-full mt-4">
            <FaGoogle
              onClick={handelGoogleLogin}
              className="text-2xl hover:text-orange cursor-pointer mx-auto"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
