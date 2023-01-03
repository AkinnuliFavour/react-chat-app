import profilePicture from "./img/woman.jpg";
import { FaPlusCircle } from "react-icons/fa";
function App() {
  return (
    <main className="h-screen p-8">
      <header className="flex gap-28 items-center w-full">
        <div className="flex gap-4 items-center">
          <figure className="text-center shadow-inner shadow-3xl shadow-black rounded-full">
            <img
              src={profilePicture}
              alt=""
              className="rounded-full w-12 h-12"
            />
          </figure>
          <h2 className="text-white text-xl font-bold">Chats</h2>
        </div>
        <div className="bg-gradient-to-l from-red-500 to-red-900 rounded-full w-8 h-8">
          <p className="text-white rounded-full text-center font-semibold text-3xl -mt-1 shadow-md shadow-black">
            +
          </p>
        </div>
      </header>
      <nav className="text-red-500 mt-4">
        <form action="">
          <input
            type="search"
            name=""
            id=""
            className="w-full p-2 pl-6 rounded-full bg-gradient-to-r from-zinc-700 to-zinc-900 shadow-inner shadow-sm shadow-black focus:outline-none text-white"
            placeholder="Search"
          />
        </form>
      </nav>
      <main className="mt-5 w-full">
        <section className="flex justify-evenly">
          <div>
            <figure className="">
              <img
                src={profilePicture}
                alt=""
                className="w-14 h-14 rounded-full shadow-md shadow-stone-900 border-solid border-stone-800 border-4"
              />
            </figure>
          </div>
          <div className="ml-4">
            <h2>Sara Sanders</h2>
            <p className="text-xs">Can you buy me dinner?</p>
          </div>
          <div className="ml-4">
            <p className="text-center text-red-500 text-sm">12:35</p>
            <p className="text-center bg-gradient-to-r from-red-500 to-red-900 rounded-lg text-sm px-2">
              100
            </p>
          </div>
        </section>
        <hr className="mt-3" />
      </main>
    </main>
  );
}

export default App;
