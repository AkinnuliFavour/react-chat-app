import { useContext } from "react";
import profilePicture from "../../../img/woman.jpg";
import { Link } from "react-router-dom";

const Body = ({ }) => {
  // const { users } = useContext(UsersContext);
  // let friends = [];
  // for (let i = 0; i < authUser.friendsId.length; i++) {
  //   for (let u = 0; u < users.length; u++) {
  //     if (authUser.friendsId[i] === users[u].id) {
  //       friends.push(users[u]);
  //     }
  //   }
  // }
  // console.log(friends.map((friend) => friend.username));
  return (
    <main className="w-full mt-8">
      {/* {users.length ? (
        friends.map((friend) => (
          <Link
            to={`/personal-chat/${authUser.id}/${friend.id}`}
            key={friend.id}
          >
            <section className="flex justify-between mt-5">
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
                <h2 className="text-center">{friend.username}</h2>
                <p className="text-xs">Can you buy me dinner?</p>
              </div>
              <div className="ml-4">
                <p className="text-center text-red-500 text-sm">12:35</p>
                <p className="text-center bg-gradient-to-r from-red-500 to-red-900 rounded-lg text-sm px-2">
                  100
                </p>
              </div>
            </section>
            <hr className="mt-3 border-gray-600" />
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )} */}

          <Link to="/personal-chat">
            <section className="flex justify-between mt-5">
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
                <h2 className="text-center">Danny</h2>
                <p className="text-xs text-center">Can you buy me dinner?</p>
              </div>
              <div className="ml-4">
                <p className="text-center text-red-500 text-sm">12:35</p>
                <p className="text-center bg-gradient-to-r from-red-500 to-red-900 rounded-lg text-sm px-2">
                  100
                </p>
              </div>
            </section>
            <hr className="mt-3 border-gray-600" />
          </Link>
    </main>
  );
};

export default Body;
