import PersonalChatHeader from "../components/PersonalChatHeader";
import PersonalChatMessages from "../components/PersonalChatMessages";
import PersonalChatFooter from "../components/PersonalChatFooter";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import api from "../api/users";
import UsersContext from "../context/UsersContext";

const PersonalChat = ({ messageInput, setMessageInput }) => {
  const [messages, setMessages] = useState([]);
  const [count, setCount] = useState(0);

  const { id } = useParams();
  const { fid } = useParams();
  const { users } = useContext(UsersContext);
  const authUser = users.find((user) => user.id === Number(id));
  const userFriend = users.find((user) => user.id === Number(fid));

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await api.get("/messages");
        setMessages(res.data);
        console.log(res.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchMessages();
  }, []);

  return (
    <main className="h-full">
      {users.length ? (
        <>
          <PersonalChatHeader id={id} userFriend={userFriend} />
          <PersonalChatMessages
            messages={messages}
            authUser={authUser}
            userFriend={userFriend}
          />
          <PersonalChatFooter
            messageInput={messageInput}
            setMessageInput={setMessageInput}
            messages={messages}
            setMessages={setMessages}
            authUser={authUser}
            userFriend={userFriend}
            setCount={setCount}
          />
        </>
      ) : (
        <p>Nothing!</p>
      )}
    </main>
  );
};

export default PersonalChat;
