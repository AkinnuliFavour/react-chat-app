import Header from "../components/Header";
import Nav from "../components/Nav";
import ChatsList from "../components/ChatsList";
import ChatsListFooter from "../components/ChatsListFooter";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "../context/UsersContext";

const Chats = () => {
  const { users } = useContext(UsersContext);
  const { id } = useParams();
  const authUser = users.find((user) => user.id === Number(id));
  console.log(authUser);
  console.log(users);
  return (
    <main>
      {users.length ? (
        <>
          <Header authUser={authUser} />
          <Nav />
          <ChatsList authUser={authUser} />
          <ChatsListFooter />
        </>
      ) : (
        <p>Nothing</p>
      )}
    </main>
  );
};

export default Chats;
