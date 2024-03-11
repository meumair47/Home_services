import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  // handle input
  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  // handle submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const responce = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (responce.ok) {
        const res_data = await responce.json();
        // console.log("response data", res_data.token);
        storeTokenInLS(res_data.token);
        setUser({
          username: "",
          email: "",
          password: "",
        });
        navigate("/login");
      }

      console.log(responce);
    } catch (error) {
      console.log("Register error: " + error);
    }
  };

  return (
    <section className="min-h-[80%] py-6">
      <div className="layout mx-auto flex justify-center">
        <div className="hidden lg:flex w-1/2">
          <img src="/images/login.png" alt="Login pic" width={400} />
        </div>

        {/* registration form here */}
        <div className="md:w-1/2">
          <h1 className="text-xl md:text-4xl text-gray-600 font-bold mt-5">
            Registration Form
          </h1>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col py-2">
              <label htmlFor="username" className="text-gray-500">
                User Name
              </label>
              <input
                type="text"
                name="username"
                autoComplete="off"
                placeholder="User Name"
                value={user.username}
                onChange={handleInputChange}
                className="p-2 border focus:outline-none bg-transparent rounded-md max-w-sm"
              />
            </div>

            <div className="flex flex-col py-2">
              <label htmlFor="email" className="text-gray-500">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                value={user.email}
                onChange={handleInputChange}
                className="p-2 border focus:outline-none bg-transparent rounded-md max-w-sm"
              />
            </div>

            <div className="flex flex-col py-2">
              <label htmlFor="password" className="text-gray-500">
                Password
              </label>
              <input
                type="password"
                value={user.password}
                onChange={handleInputChange}
                name="password"
                autoComplete="off"
                placeholder="Password"
                className="p-2 border focus:outline-none bg-transparent rounded-md max-w-sm"
              />
            </div>

            <button
              className="my-4 bg-blue-500 text-white p-2 rounded-md w-24  hover:bg-blue-600 transition duration-100 ease-in"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
