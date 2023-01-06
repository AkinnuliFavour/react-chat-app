import React from "react";
import { FaRegSmileBeam } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const PersonalChatFooter = ({ messageInput, setMessageInput }) => {
  const setState = (e) => {
    setMessageInput(e.target.value);
    console.log(messageInput);
  };
  return (
    <footer className="fixed bottom-2 w-full flex items-center gap-1">
      <form
        action=""
        className="rounded-full shadow-4xl shadow-black w-10/12 sm:w-11/12"
      >
        <FaRegSmileBeam className="text-red-500 fixed bottom-[19px] left-6 mr-4" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Type your message"
          className="text-white w-full p-3 pl-8 rounded-full bg-gradient-to-r from-zinc-500 to-zinc-800 focus:outline-none text-xs shadow-3xl shadow-gray-500"
          value={messageInput}
          onChange={(e) => setState(e)}
        />
        <div>
          <FaPaperclip className="text-red-500 fixed bottom-[19px] right-24 md:right-28 xl:right-40" />
          <FaCamera className="text-red-500 fixed bottom-[19px] right-16 md:right-20 xl:right-32" />
        </div>
      </form>
      <div className="p-2 bg-gradient-to-r from-red-500 to-red-800 rounded-full shadow-md shadow-black">
        {messageInput ? <FaChevronRight /> : <FaMicrophone />}
      </div>
    </footer>
  );
};

export default PersonalChatFooter;
