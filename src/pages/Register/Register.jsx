import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, success, error, setSucces, setError, profileUpdate } =
    useContext(AuthContext);
  const [terms, setTerms] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);
    setSucces("");
    setError("");
    if (password.length < 6) {
      setError("Please enter the password at least six digit");
      return;
    } else if (!/^(?=.*[A-Z]).{1,}$/.test(password)) {
      setError("Password contains at least one uppercase letter");
      return;
    } else if (!terms) {
      setError("Please aggree terms & condition");
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSucces("User created successfully!");

        // profile update
        // profileUpdate(result.user)
        updateProfile(result.user, {
          displayName: name,
        })
          .then(() => {
            console.log("profile updatd");
          })
          .catch((error) => {
            console.log(error.message);
          });

        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleRegister}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Please Register
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

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
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            onChange={(e) => setTerms(!terms)}
            className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="agreeToTerms" className="ml-2 text-gray-700">
            I agree to the terms and conditions
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Register
        </button>

        <p className="text-center mt-4">
          Already
          <span className="text-blue-600">
            <Link to="/login"> registered ? </Link>
          </span>
        </p>
        {success && (
          <p className="text-center text-gray-500 mb-4 mt-4 text-2xl">
            {success}
          </p>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
