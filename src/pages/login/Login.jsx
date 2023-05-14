import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UsersContext from "../../context/UsersContext";

const Login = () => {
  // const [number, setNumber] = useState("");
  // const { users, setUsers } = useContext(UsersContext);

   const navigate = useNavigate();

  // const handleLogin = () => {
  //   const authUser = users.find((user) => user.phoneNumber === number);
  //   if (authUser) {
  //     navigate(`/chats/${authUser.id}`);
  //   }
  //   console.log(authUser.username);
  // };


  const handleLogin = () => {
    navigate("/chats")
  }
  return (
    <main className="flex items-center justify-center absolute top-0 bottom-0 left-0 right-0">
      <form
        action=""
        className="flex flex-col gap-2 p-8 w-11/12 sm:w-96 h-60 bg-gradient-to-r from-red-500 to-red-800 rounded-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <h3 className="text-center text-2xl font-semibold mb-2">LOGIN</h3>
        <label htmlFor="phone-number">Phone Number:</label>
        <input
          type="number"
          name=""
          id="phone-number"
          className="w-full p-3 rounded-xl text-black outline-none mb-4"
          // value={number}
          // onChange={(e) => setNumber(e.target.value)}
          autoFocus
        />
        <input
          type="submit"
          value="LOGIN"
          className="w-2/4 bg-gradient-to-r from-zinc-600 to-zinc-800 text-center m-auto p-2 rounded-lg"
          onClick={handleLogin}
        />
      </form>
    </main>
  );
};

export default Login;
