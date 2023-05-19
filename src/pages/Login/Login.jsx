/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { handleLogin, handleGoogleSignin, handleGithubSignin } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    handleLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        event.target.reset();
        setSuccess("User Login successfully");
        toast.success("User Login successfully");
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleLogin = () => {
    handleGoogleSignin()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        setSuccess("User Login successfully");
        toast.success("User Login successfully");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGithubLogin = () => {
    handleGithubSignin()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        setSuccess("User Login successfully");
        toast.success("User Login successfully");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    // <section className="relative py-20 lg:py-10 overflow-hidden">
    //   <div className="container px-4 mx-auto">
    //     <div className="max-w-7xl mx-auto">
    //       <div className="flex flex-wrap -mx-4 xl:items-center">
    //         <div className="w-full lg:w-1/2 xl:w-3/5 px-4 order-last lg:order-first">
    //           <div className="relative max-w-xl mx-auto lg:mx-0 lg:max-w-3xl h-full">
    //             <img
    //               className="block w-full h-166 lg:h-full object-cover rounded-3xl"
    //               src="https://images.squarespace-cdn.com/content/v1/5efa3d49fddaed4299242fad/1613580669506-5PN9MEI93VSVAGT18KIP/Ada+Jusic.gif"
    //               alt=""
    //             />
    //           </div>
    //         </div>
    //         <div className="w-full lg:w-1/2 xl:w-2/5 px-4 mb-16 lg:mb-0">
    //           <div className="max-w-md lg:py-20 mx-auto lg:mr-0">
    //             <h3 className="font-heading text-center text-4xl text-gray-900 font-semibold mb-4">
    //               Login to your account
    //             </h3>

    //             <form onSubmit={handleLogin}>
    //               <div className="mb-6">
    //                 <label className="block mb-1.5 text-sm text-gray-900 font-semibold">
    //                   Email
    //                 </label>
    //                 <input
    //                   className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
    //                   type="email"
    //                   name="email"
    //                   placeholder="pat@saturn.dev"
    //                   required
    //                 />
    //               </div>
    //               <div className="mb-7">
    //                 <div className="flex mb-1.5 items-center justify-between">
    //                   <label className="block text-sm text-gray-900 font-semibold">
    //                     Password
    //                   </label>
    //                   <a
    //                     className="inline-block text-xs font-semibold text-orange-900 hover:text-gray-900 hover:underline"
    //                     to="#"
    //                   >
    //                     Forget password?{" "}
    //                   </a>
    //                 </div>
    //                 <div className="relative">
    //                   <input
    //                     className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
    //                     type="password"
    //                     name="password"
    //                     placeholder="Enter your password"
    //                   />
    //                   {/* <button className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100">
    //                     <img
    //                       src=""
    //                       alt=""
    //                     />
    //                   </button> */}
    //                 </div>
    //               </div>

    //               <div className="flex mb-6 items-center">
    //                 <input type="checkbox" value="" id="" />
    //                 <label className="ml-2 text-xs text-gray-800">
    //                   Remember Me
    //                 </label>
    //               </div>
    //               <button
    //                 className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-orange-900 rounded-full overflow-hidden"
    //                 type="submit"
    //                 value="login"
    //               >
    //                 <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
    //                 <span className="relative">Login</span>
    //               </button>
    //             </form>

    //             <span className="text-xs font-semibold text-gray-900">
    //               <span>Don&rsquo;t have an account?</span>

    //               <Link
    //                 className="ml-1 inline-block text-sm text-orange-900 hover:text-orange-700"
    //                 to="/register"
    //               >
    //                 {" "}
    //                 Sign up
    //               </Link>
    //             </span>
    //             <div className="flex mb-6 items-center">
    //               <div className="w-full h-px bg-gray-300"></div>
    //               <span className="mx-4 text-sm font-semibold text-gray-500">
    //                 Or
    //               </span>
    //               <div className="w-full h-px bg-gray-300"></div>
    //             </div>
    //             <div className="flex flex-wrap mb-6 items-center -mx-2">
    //               <div className="w-full md:w-1/2 px-2 mb-3 md:mb-0">
    //                 <a
    //                   className="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100"
    //                   href="#"
    //                 >
    //                   <img
    //                     className="h-5 w-5"
    //                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy2AEVPwzdlALtrkwL67Gpw2yxZ1r90YX_dxUlA-a59-tbyL9wWRr1mrt8CxhNnxnZK1Q&usqp=CAU"
    //                     alt=""
    //                   />
    //                   <span
    //                     onClick={handleGoogleLogin}
    //                     type="button"
    //                     className="ml-4 text-sm font-semibold text-gray-500"
    //                   >
    //                     Login with Google
    //                   </span>
    //                 </a>
    //               </div>
    //               <div className="w-full md:w-1/2 px-2">
    //                 <a
    //                   className="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100"
    //                   href="#"
    //                 >
    //                   <img
    //                     className="h-5 w-5"
    //                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
    //                     alt=""
    //                   />
    //                   <span
    //                     onClick={handleGithubLogin}
    //                     className="ml-4 text-sm font-semibold text-gray-500"
    //                   >
    //                     Login with Facebook
    //                   </span>
    //                 </a>
    //               </div>
    //               <div className="text-center mt-5">
    //                 <p className="text-red-700">{error}</p>
    //                 <p className="text-green-700">{success}</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <div className="relative  flex flex-col justify-center bg-cyan-50 min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-cyan-100 rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black-700 uppercase">
          Sign in
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link to="#" className="text-xs  text-orange-600 hover:underline">
            Forget Password?
          </Link>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-400 focus:outline-none focus:bg-orange-400">
              Login
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 ">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-orange-600"
          >
            {/* <FaGoogle className="text-sky-700 text-xl"></FaGoogle> */}
          </button>
          <button
            onClick={handleGithubLogin}
            className="  flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-orange-600"
          >
            {/* <FaGithub className="text-sky-700 text-xl"></FaGithub> */}
          </button>
        </div>

        <p className="mt-8  font-light text-center text-gray-700">
          Dont have an account?
          <Link
            to="/register"
            className="font-medium ml-2 text-orange-600 hover:underline"
          >
            Please Register
          </Link>
        </p>
        <div className="text-center mt-5">
          <p className="text-red-700">{error}</p>
          <p className="text-green-700">{success}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
