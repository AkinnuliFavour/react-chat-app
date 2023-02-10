import { createContext, useState, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

const UsersContext = createContext({});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/users"
  );

  useEffect(() => {
    setUsers(data);
  }, [data]);

  return (
    <UsersContext.Provider
      value={{
        fetchError,
        isLoading,
        users,
        setUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
