import { Label, TextInput, Button, Alert } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import GoogleProvider from "../../components/auth/GoogleProvider";

const SignIn = () => {
  useState("Sign In");

  const [error, setError] = useState("");
  const { loginWithEmail } = useAuth();

  const { state } = useLocation();
  const navigate = useNavigate();

  const form = state?.path || "/";

  const handleSignIn = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      setError("");
      await loginWithEmail(email, password);
      navigate(form, { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-lg px-4 py-4 mx-auto flex min-h justify-center items-center flex-col gap-4">
      <h2 className="font-bold text-2xl">Sign In</h2>
      <div>
        {error && (
          <Alert color="failure">
            <span>
              <span className="font-medium">{error}</span>
            </span>
          </Alert>
        )}
      </div>
      <form onSubmit={handleSignIn} className="flex flex-col gap-4 w-full">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            name="email"
            id="email2"
            type="email"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            id="password2"
            type="password"
            required={true}
            shadow={true}
            name="password"
          />
        </div>

        <p className="text-sm font-light text-gray-500 ">
          Create an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-blue-700 hover:underline "
          >
            Signup here
          </Link>
        </p>

        <Button type="submit">Sign in</Button>
      </form>
      <GoogleProvider />
    </div>
  );
};

export default SignIn;
