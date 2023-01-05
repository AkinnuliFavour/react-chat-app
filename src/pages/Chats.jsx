import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import ChatsList from "../components/ChatsList";
import ChatsListFooter from "../components/ChatsListFooter";

const Chats = () => {
  return (
    <>
      <Header />
      <Nav />
      <ChatsList />
      <ChatsListFooter />
    </>
  );
};

export default Chats;
