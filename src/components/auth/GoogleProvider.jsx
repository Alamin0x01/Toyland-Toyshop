import { useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/google.svg";
import { useAuth } from "../../context/AuthProvider";

const GoogleProvider = () => {
  const { loginWithGoogle } = useAuth();

  const { state } = useLocation();
  const navigate = useNavigate();

  const form = state?.path || "/";

  const handleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate(form, { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <article className="w-full">
      <hr className="my-6 border-gray-300 w-full" />

      <button
        onClick={handleLogin}
        type="button"
        className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300 "
      >
        <div className="flex items-center justify-center ">
          <img className="w-6" src={google} alt="" />
          <span className="ml-4">Log in with Google</span>
        </div>
      </button>
    </article>
  );
};

export default GoogleProvider;
