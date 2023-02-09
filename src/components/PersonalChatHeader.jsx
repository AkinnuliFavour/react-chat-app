import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import profilePicture from "../img/woman.jpg";
import { Link } from "react-router-dom";

const PersonalChatHeader = ({ id, userFriend }) => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-4 fixed top-4">
        <Link to={`/chats/${id}`}>
          <div className="bg-gradient-to-r from-zinc-600 to-zinc-800 p-3 rounded-full shadow-sm shadow-black">
            <FaArrowLeft className="text-red-500" />
          </div>
        </Link>
        <img src={profilePicture} alt="" className="rounded-full w-10 h-10" />
        <div>
          <h2>{userFriend.username}</h2>
          {/* <p className="text-xs">Typing...</p> */}
        </div>
      </div>
      <div className="bg-gradient-to-r from-zinc-600 to-zinc-800 p-3 rounded-full shadow-sm shadow-black fixed right-6 top-4">
        <FaPhoneAlt className="text-red-500" />
      </div>
    </header>
  );
};

export default PersonalChatHeader;
