import React from "react";
import { FaCommentAlt } from "react-icons/fa";
import { AiOutlineCamera } from "react-icons/ai";
import { FaQrcode } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChatsListFooter = () => {
  return (
    <footer className="p-4 w-full fixed bottom-0 right-0">
      <div className=" w-full p-2 bg-black rounded-full flex justify-around bg-gradient-to-r from-zinc-700 to-zinc-900 shadow-sm shadow-black">
        <Link to="/">
          <div className="rounded-full bg-zinc-700 shadow-3xl shadow-gray-400 border-2 border-zinc-700">
            <div className="shadow-4xl shadow-black p-3 rounded-full">
              <FaCommentAlt className=" text-red-500" />
            </div>
          </div>
        </Link>
        <Link>
          <div className="rounded-full bg-zinc-700 p-3 shadow-inner shadow-black border-2 border-zinc-800">
            <AiOutlineCamera className="focus:text-red-500" />
          </div>
        </Link>
        <Link>
          <div className="rounded-full bg-zinc-700 p-3 shadow-inner shadow-black border-2 border-zinc-800">
            <FaQrcode className="focus:text-red-500" />
          </div>
        </Link>
        <Link>
          <div className="rounded-full bg-zinc-700 p-3 shadow-inner shadow-black border-2 border-zinc-900 bg-blend-color">
            <FaCog className="focus:text-red-500" />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default ChatsListFooter;
