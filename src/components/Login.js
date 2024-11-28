import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_medium.jpg"
          alt="logo"
        />
      </div>

      <form className="w-3/12 absolute p-10 bg-black my-24  mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-2 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder=" Full Name"
          className="p-2 my-3 w-full bg-gray-600"
        />}
        <input
          type="text"
          placeholder=" Email Address"
          className="p-2 my-3 w-full bg-gray-600"
        />

        <input
          type="password"
          placeholder=" Password"
          className="p-2 my-3 w-full bg-gray-600"
        />
        <button className="p-3 my-6 bg-red-800 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-3 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
