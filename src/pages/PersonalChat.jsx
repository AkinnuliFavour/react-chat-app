import React, { Fragment } from "react";
import PersonalChatHeader from "../components/PersonalChatHeader";
import PersonalChatMessages from "../components/PersonalChatMessages";
import PersonalChatFooter from "../components/PersonalChatFooter";

const PersonalChat = ({ messageInput, setMessageInput }) => {
  return (
    <>
      <PersonalChatHeader
        messageInput={messageInput}
        setMessageInput={setMessageInput}
      />
      <PersonalChatMessages />
      <PersonalChatFooter
        messageInput={messageInput}
        setMessageInput={setMessageInput}
      />
    </>
  );
};

export default PersonalChat;
