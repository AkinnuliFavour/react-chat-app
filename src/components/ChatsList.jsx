import React from "react";
import profilePicture from "../img/woman.jpg";
import { Link } from "react-router-dom";

const ChatsList = () => {
  return (
    <main className="w-full">
      <Link to="/personal-chat">
        <section className="flex justify-between mt-5">
          <div>
            <figure className="">
              <img
                src={profilePicture}
                alt=""
                className="w-14 h-14 rounded-full shadow-md shadow-stone-900 border-solid border-stone-800 border-4"
              />
            </figure>
          </div>
          <div className="ml-4">
            <h2>Sara Sanders</h2>
            <p className="text-xs">Can you buy me dinner?</p>
          </div>
          <div className="ml-4">
            <p className="text-center text-red-500 text-sm">12:35</p>
            <p className="text-center bg-gradient-to-r from-red-500 to-red-900 rounded-lg text-sm px-2">
              100
            </p>
          </div>
        </section>
        <hr className="mt-3 border-gray-600" />
      </Link>
      <Link to="/personal-chat">
        <section className="flex justify-between mt-5">
          <div>
            <figure className="">
              <img
                src={profilePicture}
                alt=""
                className="w-14 h-14 rounded-full shadow-md shadow-stone-900 border-solid border-stone-800 border-4"
              />
            </figure>
          </div>
          <div className="ml-4">
            <h2>Sara Sanders</h2>
            <p className="text-xs">Can you buy me dinner?</p>
          </div>
          <div className="ml-4">
            <p className="text-center text-red-500 text-sm">12:35</p>
            <p className="text-center bg-gradient-to-r from-red-500 to-red-900 rounded-lg text-sm px-2">
              100
            </p>
          </div>
        </section>
        <hr className="mt-3 border-gray-600" />
      </Link>
      <Link to="/personal-chat">
        <section className="flex justify-between mt-5">
          <div>
            <figure className="">
              <img
                src={profilePicture}
                alt=""
                className="w-14 h-14 rounded-full shadow-md shadow-stone-900 border-solid border-stone-800 border-4"
              />
            </figure>
          </div>
          <div className="ml-4">
            <h2>Sara Sanders</h2>
            <p className="text-xs">Can you buy me dinner?</p>
          </div>
          <div className="ml-4">
            <p className="text-center text-red-500 text-sm">12:35</p>
            <p className="text-center bg-gradient-to-r from-red-500 to-red-900 rounded-lg text-sm px-2">
              100
            </p>
          </div>
        </section>
        <hr className="mt-3 border-gray-600" />
      </Link>
      <Link to="/personal-chat">
        <section className="flex justify-between mt-5">
          <div>
            <figure className="">
              <img
                src={profilePicture}
                alt=""
                className="w-14 h-14 rounded-full shadow-md shadow-stone-900 border-solid border-stone-800 border-4"
              />
            </figure>
          </div>
          <div className="ml-4">
            <h2>Sara Sanders</h2>
            <p className="text-xs">Can you buy me dinner?</p>
          </div>
          <div className="ml-4">
            <p className="text-center text-red-500 text-sm">12:35</p>
            <p className="text-center bg-gradient-to-r from-red-500 to-red-900 rounded-lg text-sm px-2">
              100
            </p>
          </div>
        </section>
        <hr className="mt-3 border-gray-600" />
      </Link>
    </main>
  );
};

export default ChatsList;
