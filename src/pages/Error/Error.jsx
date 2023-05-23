import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center ">
          <img
            className=" mb-7 animate-bounce"
            src="https://t3.ftcdn.net/jpg/01/99/49/18/360_F_199491843_Lk3SoVIVM2m3wPrI3jkVwJVEP60neEsp.jpg"
            alt=""
          />

          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
