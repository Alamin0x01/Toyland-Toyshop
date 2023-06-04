import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-black">
      <div className="grid gap-5 grid-cols-12 p-10 text-base-content">
        <div className="w-full flex flex-col gap-3 justify-center items-center col-span-12 xl:col-span-3">
          <Link to={"/"}>
            <img
              className="w-20 h-auto"
              src="https://www.brunswickshopping.com/wp-content/uploads/2017/10/toylmnd.svg"
              alt=""
            />
          </Link>
          <h3 className="font-semibold text-xl text-orange-500">
            Toyland Toyshop
          </h3>
          <p className="text-black">Unlock the Power of Fun Learning</p>
          <ul className="flex gap-3">
            <li>
              <a
                className="bg-orange-500 text-black rounded-full inline-block p-2 text-xl"
                href="https://facebook.com"
                target="_blank"
              >
                {" "}
                <FaFacebook></FaFacebook>{" "}
              </a>
            </li>
            <li>
              <a
                href="https://Github.com"
                target="_blank"
                className="bg-orange-500 text-black rounded-full inline-block p-2 text-xl"
              >
                {" "}
                <FaGithub></FaGithub>{" "}
              </a>
            </li>
            <li>
              <a
                href="https://LinkedinIn"
                target="_blank"
                className="bg-orange-500 text-black rounded-full inline-block p-2 text-xl"
              >
                {" "}
                <FaLinkedinIn></FaLinkedinIn>{" "}
              </a>
            </li>
            <li>
              <a
                href="https://LinkedinIn"
                target="_blank"
                className="bg-orange-500 text-black rounded-full inline-block p-2 text-xl"
              >
                {" "}
                <FaInstagram></FaInstagram>{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center col-span-12 md:col-span-4 xl:col-span-3">
          <span className="footer-title text-black">Services</span>
          <a className="link link-hover text-black">Branding</a>
          <a className="link link-hover text-black">Design</a>
          <a className="link link-hover text-black">Marketing</a>
          <a className="link link-hover text-black">Advertisement</a>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center col-span-12 md:col-span-4 xl:col-span-3">
          <span className="footer-title text-black">Company</span>
          <a className="link link-hover text-black">About us</a>
          <a className="link link-hover text-black">Contact</a>
          <a className="link link-hover text-black">Jobs</a>
          <a className="link link-hover text-black">Press kit</a>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center col-span-12 md:col-span-4 xl:col-span-3">
          <span className="footer-title text-black">Legal</span>
          <a className="link link-hover text-black">Terms of use</a>
          <a className="link link-hover text-black">Privacy policy</a>
          <a className="link link-hover text-black">Cookie policy</a>
        </div>
      </div>
      <p className="py-5 text-center bg-red-300">
        Copyright © 2023 - All right reserved by{" "}
        <span className="font-bold text-orange-500">Toyland Toyshop</span>
      </p>
    </footer>
  );
};

export default Footer;
