import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { handleCreateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegistration = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const dName = form.name.value;
    const photoUrl = form.photo_url.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    // password validation
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase in your password");
      toast.error("Please add at least one uppercase in your password");
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setError("Please add at least one number in your password");
      toast.error("Please add at least one Number in your password");
      return;
    } else if (password < 6) {
      setError("Password must be at least 6 characters");
      toast.error("Password must be at least 6 characters");
      return;
    } else if (password !== confirm) {
      setError("Password not matched");
      toast.error("Password not matched");
      return;
    }

    handleCreateUser(email, password)
      .then((result) => {
        const createdUser = result.user;

        updateProfile(createdUser, {
          displayName: dName,
          photoURL: photoUrl,
        });
        navigate(from, { replace: true });

        event.target.reset();
        setSuccess("User has created successfully");
        toast.success("User has created successfully!");
      })
      .catch((error) => setError(error.message));
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="relative flex bg-cyan-50 flex-col justify-center  overflow-hidden">
      <div className="w-full mt-5 mb-5 p-6 m-auto bg-cyan-100 rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black-700 uppercase">
          Please Register
        </h1>
        <form onSubmit={handleRegistration} className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Photo URL
            </label>
            <input
              type="text"
              name="photo_url"
              placeholder="Photo URL"
              required
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
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
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              required
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-3 ">
            <label htmlFor="agree-to-terms">
              <input
                type="checkbox"
                name="agree-to-terms"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2">
                I agree to the
                <Link className="text-primary ml-2" to="/terms">
                  terms and conditions
                </Link>
              </span>
            </label>
          </div>

          <div className="mt-6">
            <button
              className="btn btn-primary w-full tracking-wide "
              type="submit"
              disabled={!isChecked}
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-8  font-light text-center text-gray-700">
          Already have an account?
          <Link
            to="/login"
            className="font-medium ml-2 text-orange-600 hover:underline"
          >
            Login
          </Link>
        </p>
        <div className="text-center my-5">
          <p className="text-red-700">{error}</p>
          <p className="text-green-700">{success}</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
