const MyToys = () => {
  return (
    <div>
      <h1>my toys</h1>
      {/* <section className="relative py-20 lg:py-10 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4 xl:items-center">
              <div className="w-full lg:w-1/2 xl:w-3/5 px-4 order-last lg:order-first">
                <div className="relative max-w-xl mx-auto lg:mx-0 lg:max-w-3xl h-full">
                  <img
                    className="block w-full h-166 lg:h-full object-cover rounded-3xl"
                    src="https://images.squarespace-cdn.com/content/v1/5efa3d49fddaed4299242fad/1613580669506-5PN9MEI93VSVAGT18KIP/Ada+Jusic.gif"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 xl:w-2/5 px-4 mb-16 lg:mb-0">
                <div className="max-w-md lg:py-20 mx-auto lg:mr-0">
                  <h3 className="font-heading text-4xl text-gray-900 font-semibold mb-4">
                    Sign in to your account
                  </h3>
                  <p className="text-lg text-gray-500 mb-10">
                    Greetings on your return! We kindly request you to enter
                    your details.
                  </p>
                  <div className="flex flex-wrap mb-6 items-center -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                      <a
                        className="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100"
                        href="#"
                      >
                        <img
                          src="saturn-assets/images/sign-up/icon-facebook.svg"
                          alt=""
                        />
                        <span className="ml-4 text-sm font-semibold text-gray-500">
                          Login with Facebook
                        </span>
                      </a>
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                      <a
                        className="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100"
                        href="#"
                      >
                        <img
                          src="saturn-assets/images/sign-up/icon-apple.svg"
                          alt=""
                        />
                        <span className="ml-4 text-sm font-semibold text-gray-500">
                          Login with Apple
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="flex mb-6 items-center">
                    <div className="w-full h-px bg-gray-300"></div>
                    <span className="mx-4 text-sm font-semibold text-gray-500">
                      Or
                    </span>
                    <div className="w-full h-px bg-gray-300"></div>
                  </div>
                  <form  onSubmit={handleLogin}>
                    <div className="mb-6">
                      <label className="block mb-1.5 text-sm text-gray-900 font-semibold">
                        Email
                      </label>
                      <input
                        className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                        type="email"
                        name="email"
                        placeholder="pat@saturn.dev"
                      />
                    </div>
                    <div className="mb-7">
                      <div className="flex mb-1.5 items-center justify-between">
                        <label className="block text-sm text-gray-900 font-semibold">
                          Password
                        </label>
                        <a
                          className="inline-block text-xs font-semibold text-orange-900 hover:text-gray-900"
                          href="#"
                        >
                          Forget password?
                        </a>
                      </div>
                      <div className="relative">
                        <input
                          className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                        />
                        <button className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100">
                          <img
                            src="saturn-assets/images/sign-up/icon-eye.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                    <div className="flex mb-6 items-center">
                      <input type="checkbox" value="" id="" />
                      <label className="ml-2 text-xs text-gray-800">
                        Remember for 30 days
                      </label>
                    </div>
                    <button
                      className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-orange-900 rounded-full overflow-hidden"
                      type="submit"
                      value={login}
                    >
                      <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <span className="relative">Login</span>
                    </button>
                    <span className="text-xs font-semibold text-gray-900">
                      <span>Don&rsquo;t have an account?</span>
                      <Link to="/register"
                        className="ml-1 inline-block text-orange-900 hover:text-orange-700"
                        href="#"
                      >
                        Sign up
                      </link>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/*  */}
      {/*  */}
      {/* <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src="" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              New to Car Doctors{" "}
              <Link className="text-orange-600 font-bold" to="/register">
                Sign Up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default MyToys;
