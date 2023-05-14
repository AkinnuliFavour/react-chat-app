import { Routes, Route } from "react-router-dom";
import {Login, Chats, PersonalChat} from "./pages"
import { useState } from "react";
import { UsersProvider } from "./context/UsersContext";

function App() {
  // const [messageInput, setMessageInput] = useState("");

  return (
    <div className="h-screen">
      <UsersProvider>
          <Routes>
            <Route
              path="/chats"
              element={
                <Chats
                  // messageInput={messageInput}
                  // setMessageInput={setMessageInput}
                />
              }
            />
            <Route
              path="/personal-chat"
              element={
                <PersonalChat
                  // messageInput={messageInput}
                  // setMessageInput={setMessageInput}
                />
              }
            />
            <Route path="/" element={<Login />} />
          </Routes>
      </UsersProvider>
    </div>
  );
}

export default App;
