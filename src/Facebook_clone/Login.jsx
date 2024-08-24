import React from "react";
import logo from "./logo.svg";
const Login = () => {
  document.title = "Facebook – log in or sign up";
  return (
    <>
      <div className="container inset-0 flex  m-0 p-0 items-center justify-center h-screen w-screen bg-gray-100 ">
        <div className="flex flex-row items-start justify-center ">
          <div className="left w-half inset-0  mx-14 flex flex-col content-start justify-start py-16">
            <img
              src={logo}
              className="w-5/12 w-6/12 not-selectable"
              alt="No images"
            />
            <p className="text-3xl mx-6">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
          <div className="flex flex-col min-w-fit  w-auto">
            <div className="right flex flex-col bg-white p-3 rounded-xl w-96  shadow-lg backdrop-blur-3xl w-4/12">
              <input
                className="px-4 h-12 my-2 border  rounded-lg active:border-blue-500"
                type="text"
                placeholder="Email address or phone number"
              />
              <input
                className="px-4 h-12 my-2 border  rounded-lg active:border-blue-500"
                type="password"
                placeholder="Password"
              />
              <button className="bg-blue-600 text-white my-2 py-3 rounded-lg font-bold text-xl">
                Login
              </button>
              <span className="text-blue-600 text-center text-sm my-2  hover:cursor-pointer hover:underline">
                Forgotten password?
              </span>
              <hr className="my-2" />
              <button className="bg-green-500 text-white my-2 py-3 rounded-lg font-bold text-xl  w-fit px-3 mx-auto text-sm">
                Create new Account
              </button>
            </div>
            <div className="Page text-sm  my-4  flex items-center justify-center">
              <p>
                <span className="font-bold hover:underline text-black">
                  Create a Page
                </span>
                {"\u00A0"}for a celebrity, brand or business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
