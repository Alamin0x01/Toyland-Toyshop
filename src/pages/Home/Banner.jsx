import React from "react";
const Banner = () => {
  return (
    <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
      <div className="lg:flex items-center justify-between">
        <div className="lg:w-1/3">
          <h1 className="text-4xl text-red-400 font-bold  leading-9 ">
            Makes Your Baby Happier
          </h1>
          <p className="text-base leading-6 mt-4 text-gray-600">
            Welcome to our action-packed world of toys! At our e-commerce
            website, we specialize in bringing you the latest and greatest
            action toys that will ignite your imagination and bring endless
            excitement to your playtime.
          </p>
          <button
            aria-label="view catalogue"
            className="focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none  flex items-center    border-red-300
              hover:bg-rose-400  px-6
              h-11
              text-gray-800 border-2"
          >
            SHOP NOW
            <svg
              className="ml-2 mt-1"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.33325 4H10.6666"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 6.66667L10.6667 4"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 1.33398L10.6667 4.00065"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="lg:w-7/12 lg:mt-0 mt-8">
          <div className="w-full h-full bg-red-200">
            <img
              src="https://i.ibb.co/SXCwXPg/rsz-71kh0t03wol-ac-sl1500.jpg"
              alt="apartment design"
              className="w-full sm:block hidden"
            />
            <img
              src="https://i.ibb.co/ZVPGjGJ/pexels-max-vakhtbovych-6782351-1.png"
              alt="apartment design"
              className="sm:hidden block w-full"
            />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
            <img
              src="https://i.ibb.co/vJPyDYd/rsz-hasbrotoys0014.jpg"
              className="w-full"
              alt="kitchen"
            />
            <img
              src="https://i.ibb.co/q7Kjwnb/rsz-endamhasbrotb.jpg"
              className="w-full"
              alt="sitting room"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
