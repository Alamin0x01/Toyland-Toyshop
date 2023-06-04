import React from "react";

const BestSale = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className="py-20 bg-gradient-to-r  mb-7"
    >
      <div className="max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-3xl text-center font-bold">
          Best Sale <span className="stl-font text-[#06959d]">#Trend 3</span>
        </h2>
        <p>
          E-commerce has continued to be a source of steady sales for B2B online
          stores.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="text-3xl stl-font font-bold">#1</p>
            <div className="flex justify-center items-center bg-gradient-to-r from-pink-400 to-yellow-500 text-white rounded-lg p-4 mb-4">
              <img src="https://i.ibb.co/ZWR4XgC/wonder.jpg" alt="" />
            </div>
            <h3 className="text-xl font-bold mb-2">Wonder Women</h3>
            <p className="text-gray-600">
              {" "}
              Wonder Women, the Amazonian princess, is a fierce warrior with
              superhuman abilities and a strong sense of justice.
            </p>
            <p className="font-semibold text-lg text-pink-500">$ 650</p>
            <button className="border-dotted border-0 btn bg-gradient-to-r from-pink-400 to-yellow-500 text-white mt-5 tracking-widest">
              Shop Now
            </button>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <p className="text-3xl stl-font font-bold">#2</p>
            <div className="flex justify-center items-center bg-gradient-to-r from-pink-400 to-yellow-500 text-white rounded-lg p-4 mb-4">
              <img src="https://i.ibb.co/m55jSG7/superman.jpg" alt="" />
            </div>
            <h3 className="text-xl font-bold mb-2">Super Man</h3>
            <p className="text-gray-600">
              Super Man, the Last Son of Krypton, is Earth's mightiest hero with
              superhuman strength and the ability to fly.
            </p>
            <p className="font-semibold text-lg text-pink-500">$ 1200</p>
            <button className="border-dotted border-0 btn bg-gradient-to-r from-pink-400 to-yellow-500 text-white mt-5 tracking-widest">
              Shop Now
            </button>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <p className="text-3xl stl-font font-bold">#3</p>
            <div className="flex justify-center items-center bg-gradient-to-r from-pink-400 to-yellow-500 text-white rounded-lg p-4 mb-4">
              <img src="https://i.ibb.co/KjFwhmK/Optimus-Prime.jpg" alt="" />
            </div>
            <h3 className="text-xl font-bold mb-2">Optimus Prime</h3>
            <p className="text-gray-600">
              {" "}
              Optimus Prime, known in Japan as Convoy, is a fictional character
              in the Transformers franchise and developed for an American
              market.
            </p>
            <p className="font-semibold text-lg text-pink-500">$ 800</p>
            <button className="border-dotted border-0 btn bg-gradient-to-r from-pink-400 to-yellow-500 text-white mt-5 tracking-widest">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSale;
