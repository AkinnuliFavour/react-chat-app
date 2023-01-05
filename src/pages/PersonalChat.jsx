import React from "react";
import { FaRegSmileBeam } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import PersonalChatHeader from "../components/PersonalChatHeader";
import PersonalChatMessages from "../components/PersonalChatMessages";

const PersonalChat = () => {
  return (
    <>
      <PersonalChatHeader />
      <PersonalChatMessages/>
    </>
  );
};

export default PersonalChat;
