import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chats from "./pages/Chats";
import PersonalChat from "./pages/PersonalChat";
import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import { UsersProvider } from "./context/UsersContext";

function App() {
  const [messageInput, setMessageInput] = useState("");

  return (
    <div className="h-screen">
      <UsersProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/chats/:id"
              element={
                <Chats
                  messageInput={messageInput}
                  setMessageInput={setMessageInput}
                />
              }
            />
            <Route
              path="/personal-chat/:id/:fid"
              element={
                <PersonalChat
                  messageInput={messageInput}
                  setMessageInput={setMessageInput}
                />
              }
            />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </UsersProvider>
    </div>
  );
}

export default App;
