import { FaRegSmileBeam } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Footer = ({
  messageInput,
  setMessageInput
}) => {
  // let id = messages.length ? messages[messages.length - 1].id : 1;

  // const handleSubmit = async () => {
  //   const newMessage = {
  //     fromUserId: authUser.id,
  //     toUserId: userFriend.id,
  //     id: ++id,
  //     message: messageInput,
  //     date: new Date().toLocaleTimeString([], {
  //       hour: "numeric",
  //       minute: "2-digit",
  //     }),
  //     sent: true,
  //   };
  //   try {
  //     const response = await api.post("/messages", newMessage);
  //     const allMessages = [...messages, response.data];
  //     setMessages(allMessages);
  //     setCount((prev) => prev + 1);
  //     setMessageInput("");
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // };

  return (
    <footer className="fixed bottom-2 w-full flex flex-row items-center justify-around px-4">
      <form
        action=""
        className="rounded-full shadow-4xl shadow-black w-9/12 sm:w-11/12"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* <FaRegSmileBeam className="text-red-500 fixed bottom-[19px] left-6 mr-4" /> */}
        <input
          type="text"
          name=""
          id=""
          placeholder="Type your message"
          className="text-zinc-800 w-full p-3 pl-8 rounded-full bg-gradient-to-r from-zinc-500 to-zinc-800 focus:outline-none text-xs shadow-3xl shadow-gray-500 opacity-70 font-black"
          value={messageInput}
          // onChange={(e) => setMessageInput(e.target.value)}
        />
        {/* <div>
          <FaPaperclip className="text-red-500 fixed bottom-[19px] right-24 md:right-28 xl:right-40" />
          <FaCamera className="text-red-500 fixed bottom-[19px] right-16 md:right-20 xl:right-32" />
        </div> */}
      </form>
      <div className="p-3 md:p-4 bg-gradient-to-r from-red-500 to-red-800 rounded-full shadow-md shadow-black">
          <FaChevronRight onClick={() => handleSubmit()} />
      </div>
    </footer>
  );
};

export default Footer;
