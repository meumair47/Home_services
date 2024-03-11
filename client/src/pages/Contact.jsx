import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setData({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  // handle input

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  // handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="layout min-h-[80vh]">
      <div className="flex">
        <div className="w-1/2 py-4 px-4 hidden lg:flex">
          <img src="/images/login.png" alt="contact form" width={400} />
        </div>
        <div>
          <h1 className="text-xl md:text-4xl text-gray-600 font-bold mt-5">
            Contact Us
          </h1>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:py-2">
              <label htmlFor="username" className="text-gray-500 py-1">
                User Name
              </label>
              <input
                type="text"
                name="username"
                placeholder="User Name"
                autoComplete="off"
                value={contact.username}
                required
                onChange={handleInputChange}
                className="p-2 border focus:outline-none bg-transparent rounded-md max-w-sm"
              />
            </div>

            <div className="flex flex-col py-2">
              <label htmlFor="email" className="text-gray-500 py-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                required
                onChange={handleInputChange}
                value={contact.email}
                className="p-2 border focus:outline-none bg-transparent rounded-md max-w-sm"
              />
            </div>

            <div className="flex flex-col py-2">
              <label htmlFor="message" className="text-gray-500 py-1">
                Message
              </label>
              <textarea
                className="focus:outline-none border"
                name="message"
                value={contact.message}
                onChange={handleInputChange}
                required
                id="message"
                cols="50"
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className="my-4 bg-blue-500 text-white p-2 rounded-md w-24 hover:bg-blue-600 transition duration-100 ease-in"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
