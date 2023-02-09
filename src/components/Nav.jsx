import React from "react";

const Nav = () => {
  return (
    <nav className="text-red-500 mt-4">
      <form action="">
        <input
          type="search"
          name=""
          id=""
          className="w-full p-2 pl-6 rounded-full bg-gradient-to-r from-zinc-700 to-zinc-900 shadow-inner shadow-sm shadow-black focus:outline-none text-white"
          placeholder="Search"
          autoFocus
        />
      </form>
    </nav>
  );
};

export default Nav;
