import React from "react";

const PersonalChatMessages = () => {
  return (
    <main className="mt-12 flex flex-col p-4">
      <div className="bg-gradient-to-r from-red-500 to-red-800 self-end flex items-center gap-4 p-2 rounded-t-lg rounded-bl-lg">
        <p className="max-w-md">Hello, How are you?</p>
        <p className="text-xs">4:30</p>
      </div>
      <div className="bg-gradient-to-r from-zinc-600 to-zinc-800 self-start flex items-center gap-4 p-2 rounded-t-lg rounded-br-lg mt-4">
        <p className="max-w-md">Hello, How are you?</p>
        <p className="text-xs">4:30</p>
      </div>
    </main>
  );
};

export default PersonalChatMessages;
