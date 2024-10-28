import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // Request the login API
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/login`,
        { email, password }
      );

      if (response.data.success) {
        const token = response.data.token;

        // Decode the token to check for the role
        const decodedToken = jwtDecode(token);

        if (decodedToken.role === "admin") {
          // Store the token in localStorage
          localStorage.setItem("token", token);
          setToken(token);

          // Redirect to the /add page
          navigate("/add");
        } else {
          toast.error("Access Denied: You are not an admin");
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4"></h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-3">
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
