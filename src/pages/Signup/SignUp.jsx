import { Label, TextInput, Button, Alert } from "flowbite-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import GoogleProvider from "../../components/auth/GoogleProvider";
import useTitle from "../../hooks/useTitle";

const SignUp = () => {
  useTitle("Sign Up");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUpWithEmail, profileUpdate } = useAuth();

  const { state } = useLocation();
  const navigate = useNavigate();

  const form = state?.path || "/";

  const handleSignUp = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const repeatpassword = e.target.repeatpassword.value;

    if (password.length < 6) {
      setError("Password length must be up to 6 char");
      return;
    }
    if (password !== repeatpassword) {
      setError("Password must be same");
      return;
    }

    try {
      setError("");
      setLoading(true);
      const { user } = await signUpWithEmail(email, password);
      await profileUpdate(user, name, photo);
      navigate(form, { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-lg px-4 mx-auto py-4 flex min-h justify-center items-center flex-col gap-4">
      <h2 className="font-bold text-2xl ">Sign Up</h2>
      <div>
        {error && (
          <Alert color="failure">
            <span>
              <span className="font-medium">{error}</span>
            </span>
          </Alert>
        )}
      </div>
      <form onSubmit={handleSignUp} className="flex flex-col gap-4 w-full">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput
            name="name"
            id="name"
            type="text"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="url" value="Your Photo Url" />
          </div>
          <TextInput
            name="photo"
            id="url"
            type="text"
            required={true}
            shadow={true}
          />
        </div>
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            name="repeatpassword"
            required={true}
            shadow={true}
          />
        </div>

        <p className="text-sm font-light text-gray-500 ">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="font-medium text-blue-700 hover:underline "
          >
            Login here
          </Link>
        </p>

        <Button disabled={loading} type="submit">
          Register new account
        </Button>
      </form>
      <GoogleProvider />
    </div>
  );
};

export default SignUp;
