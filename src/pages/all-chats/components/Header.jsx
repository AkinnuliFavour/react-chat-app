import React from "react";
import profilePicture from "../../../img/woman.jpg";

const Header = () => {
  return (
    <header className="flex gap-28 items-center w-full justify-between">
      <div className="flex gap-4 items-center">
        <figure className="text-center shadow-inner shadow-3xl shadow-black rounded-full">
          <img src={profilePicture} alt="" className="rounded-full w-12 h-12" />
        </figure>
        <h2 className="text-white text-xl font-bold">Chats</h2>
      </div>
      <div className="bg-gradient-to-l from-red-500 to-red-900 rounded-full w-8 h-8">
        <p className="text-white rounded-full text-center font-semibold text-3xl -mt-1 shadow-md shadow-black">
          +
        </p>
      </div>
    </header>
  );
};

export default Header;
