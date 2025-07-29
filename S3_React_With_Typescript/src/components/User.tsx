// type UserShape = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

import type { ReactNode } from 'react';

interface UserShape {
  name: string;
  age: number;
  isStudent: boolean;
  children: ReactNode;
}

const User = ({ name, age, isStudent, children }: UserShape) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{isStudent}</h2>
      {children}
    </div>
  );
};
export default User;
