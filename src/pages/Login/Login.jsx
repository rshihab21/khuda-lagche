import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const { userSignIn, resetPassWord } = useContext(AuthContext);
  const emailRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    userSignIn(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleForget = () => {
    const email = emailRef.current.value;
    console.log(email);
    resetPassWord(email)
      .then(() => {
        if (email) {
          alert("Please check your email");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Please Login
        </h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            ref={emailRef}
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <button onClick={handleForget}>Forget password?</button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
        <p className="text-center mt-4">
          Are you new
          <span className="text-blue-600">
            <Link to="/register"> here ? </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
