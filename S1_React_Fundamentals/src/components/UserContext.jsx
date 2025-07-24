import { createContext, useState } from 'react';

const UserContext = createContext({ user: {}, updateUser: () => {} });

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'John Doe' });

  const updateUser = (newName) => {
    setUser({ name: newName });
  };

  const value = {
    user,
    updateUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
