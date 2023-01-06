import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chats from "./pages/Chats";
import PersonalChat from "./pages/PersonalChat";
import { useState } from "react";

function App() {
  const [messageInput, setMessageInput] = useState("");
  return (
    <div className="h-full">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Chats
                messageInput={messageInput}
                setMessageInput={setMessageInput}
              />
            }
          />
          <Route
            path="/personal-chat"
            element={
              <PersonalChat
                messageInput={messageInput}
                setMessageInput={setMessageInput}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
