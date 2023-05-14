const Messages = () => {
  return (
    <main className="mt-16 flex flex-col p-4">
      {/* {!messages.find(
        (message) =>
          (authUser.id === message.fromUserId &&
            userFriend.id === message.toUserId) ||
          (authUser.id === message.toUserId &&
            userFriend.id === message.fromUserId)
      ) && (
        <p className="m-auto text-3xl font-bold text-red-400">
          No messages yet!
        </p>
      )}
      {messages.map((message) => {
        if (
          messages.length &&
          authUser.id === message.fromUserId &&
          userFriend.id === message.toUserId
        ) {
          return (
            <div
              className="bg-gradient-to-r from-red-500 to-red-800 self-end flex items-center gap-4 p-2 rounded-t-lg rounded-bl-lg mt-4"
              key={message.id}
            >
              <p className="max-w-md">{message.message}</p>
              <p className="max-w-md">{message.date}</p>
            </div>
          );
        } else if (
          messages.length &&
          authUser.id === message.toUserId &&
          userFriend.id === message.fromUserId
        ) {
          return (
            <div
              className="bg-gradient-to-r from-zinc-600 to-zinc-800 self-start flex items-center gap-4 p-2 rounded-t-lg rounded-br-lg mt-4"
              key={message.id}
            >
              <p className="max-w-md">{message.message}</p>
              <p className="max-w-md">{message.date}</p>
            </div>
          );
        } else {
          return;
        }
      })} */}
            <div
              className="bg-gradient-to-r from-red-500 to-red-800 self-end flex items-center gap-4 p-2 rounded-t-lg rounded-bl-lg mt-4"
            >
              <p className="max-w-md">Hi</p>
              <p className="max-w-md">11:00</p>
            </div>
            <div
              className="bg-gradient-to-r from-zinc-600 to-zinc-800 self-start flex items-center gap-4 p-2 rounded-t-lg rounded-br-lg mt-4"
            >
              <p className="max-w-md">Hi</p>
              <p className="max-w-md">10:00</p>
            </div>
    </main>
  );
};

export default Messages;
