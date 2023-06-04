import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/Gallery/g1.jpg";
import img2 from "../../assets/Gallery/g2.jpg";
import img3 from "../../assets/Gallery/g3.jpg";
import img4 from "../../assets/Gallery/g4.webp";
import img5 from "../../assets/Gallery/g5.jpg";

import img7 from "../../assets/Gallery/g7.jpg";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ offset: 200, duration: 400, easing: "ease-in-out", delay: 200 });
  }, []);
  return (
    <div className="mb-14">
      <div className="text-center my-6">
        <h2 className="text-4xl font-bold text-center text-orange mt-12 mb-4">
          Toys Gallery
        </h2>
        <p className="text-2xl font-semibold">Best Selling Super Toys.</p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        {/* Image 1 */}
        <div data-aos="zoom-in" className="">
          <div className="relative group">
            <img src={img1} alt="Image 1" className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-orange lg:text-4xl font-bold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ">
                Iron Man
              </p>
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div data-aos="fade-up" className="">
          <div className="relative group">
            <img src={img2} alt="Image 2" className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-orange lg:text-4xl font-bold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                Thor
              </p>
            </div>
          </div>
        </div>

        {/* Image 3 */}
        <div data-aos="zoom-in" className="">
          <div className="relative group">
            <img src={img3} alt="Image 3" className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-orange lg:text-4xl font-bold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                Captain America
              </p>
            </div>
          </div>
        </div>
        {/* Image 4 */}
        <div data-aos="zoom-in" className="">
          <div className="relative group">
            <img src={img4} alt="Image 3" className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-orange lg:text-4xl font-bold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                Hulk
              </p>
            </div>
          </div>
        </div>
        {/* Image 5 */}
        <div data-aos="fade-up" className="">
          <div className="relative group">
            <img src={img5} alt="Image 3" className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-orange lg:text-4xl font-bold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                Natasha Romanoff
              </p>
            </div>
          </div>
        </div>
        {/* Image 6 */}
        <div data-aos="zoom-in" className="">
          <div className="relative group">
            <img src={img7} alt="Image 3" className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-orange lg:text-4xl font-bold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                Optimus Prime
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
