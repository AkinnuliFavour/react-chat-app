import { Header, Nav, Body, Footer } from "./components";
// import { useParams } from "react-router-dom";
// import { useContext } from "react";
// import UsersContext from "../context/UsersContext";

const Chats = () => {
  // const { users } = useContext(UsersContext);
  // const { id } = useParams();
  // const authUser = users.find((user) => user.id === Number(id));
  // console.log(authUser);
  // console.log(users);
  return (
    <main className="p-4">
      {/* {users.length ? ( */}
          <Header
            // authUser={authUser} 
          />
          <Nav />
          <Body
            // authUser={authUser} 
          />
          {/* <Footer /> */}
      {/* ) : (
        <p>Nothing</p>
      )} */}
    </main>
  );
};

export default Chats;
