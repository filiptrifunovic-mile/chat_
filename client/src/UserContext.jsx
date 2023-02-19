import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [username, setLoggedInUsername] = useState(null);
  const [id, setId] = useState(null);

  return (
    <UserContext.Provider
      value={{
        username,
        setLoggedInUsername,
        id,
        setId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
