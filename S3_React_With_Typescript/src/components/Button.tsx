import type { FC } from 'react';

interface ButtonShape {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

const Button: FC<ButtonShape> = ({ label, onClick, disabled }) => {
  return (
    <div>
      <button onClick={onClick} disabled={disabled}>
        {label}
      </button>
    </div>
  );
};
export default Button;
