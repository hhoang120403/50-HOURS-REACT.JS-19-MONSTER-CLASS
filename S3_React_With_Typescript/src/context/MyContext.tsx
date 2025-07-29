import { createContext, useState, type FC, type ReactNode } from 'react';

interface MyContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

interface MyProviderProps {
  children: ReactNode;
}

export const MyContext = createContext<MyContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const value = {
    count,
    increment,
    decrement,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default MyProvider;
