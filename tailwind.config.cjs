/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/pages/PersonalChat.jsx",
    "./src/pages/LoginPage.jsx",
    "./src/components/Header.jsx",
    "./src/components/Nav.jsx",
    "./src/components/ChatsList.jsx",
    "./src/components/ChatsListFooter.jsx",
    "./src/components/PersonalChatHeader.jsx",
    "./src/components/PersonalChatMessages.jsx",
    "./src/components/PersonalChatFooter.jsx",
    "./src/components/TimeAgo.jsx",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "inset -5px -5px 3px -4px rgba(250, 250, 250, 0.6)",
        "4xl": "inset 7px 5px 3px -4px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
