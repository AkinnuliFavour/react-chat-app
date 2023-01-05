import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chats from "./pages/Chats";
import PersonalChat from "./pages/PersonalChat";

function App() {
  return (
    <div className="h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chats />} />
          <Route path="/personal-chat" element={<PersonalChat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
