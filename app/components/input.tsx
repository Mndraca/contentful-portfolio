"use client";

import React, { FC, ChangeEvent } from "react";

interface InputProps {
  name: string;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ name, handleChange, placeholder }) => {
  const isMessage = name === "message";

  return (
    <div className="mb-4">
      {isMessage ? (
        <textarea
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full p-3 border rounded-md"
          style={{ height: "150px", resize: "none" }}
        />
      ) : (
        <input
          type="text"
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-800 bg-white transition duration-200 ease-in-out

        md:w-auto md:px-6 md:py-4 md:border-gray-400"
        />
      )}
    </div>
  );
};

export default Input;
