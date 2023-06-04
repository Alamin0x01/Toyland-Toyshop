import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useTitle from "../Hook/useTitle";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  useTitle("SignUp");
  const [error, setError] = useState("");
  const { createUser, settingDataToProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        setError("");
        const user = result.user;
        console.log(user);
        settingDataToProfile(name, photo)
          .then(() => {
            console.log("Profile updated");
            toast("User Created Successfully");
          })
          .catch((error) => {
            setError(error.message);
          });
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };
  return (
    <div>
      <div className="card lg:w-1/3 mx-auto shadow-2xl my-14">
        <div className="card-body">
          <h2 className="text-2xl font-bold border-b lg:w-1/2 border-orange">
            Please Sign Up
          </h2>
          <form onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Your Photo Url"
                className="input input-bordered"
                name="photoUrl"
              />
            </div>
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
              value="Sign Up"
            />
          </form>
          <p className="mt-4">
            Have an account?{" "}
            <Link className="text-orange " to="/signin">
              Please Sign In
            </Link>
          </p>
          <p className="text-orange font-semibold my-4">{error}</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
