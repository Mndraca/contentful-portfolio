import { FC } from "react";

interface ButtonProps {
  onClick: (event: React.FormEvent) => void;
  label: string;
}

const Button: FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="p-8 border-2 border-pink-100 rounded-lg  bg-gradient-to-br from-rose-300 via-rose-400 to-rose-300  font-bold text-white py-2 px-3 mt-4  hover:bg-pink-400 block sm:inline-block"
    >
      {label}
    </button>
  );
};

export default Button;
