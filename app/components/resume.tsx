import React from "react";

const Resume: React.FC = () => {
  return (
    <div className="mt-4 sm:mt-0">
      <a
        href="/resume.pdf"
        download="Milena_Komnenic_Resume.pdf"
        className="text-sm px-4 py-2 rounded-lg border-2 border-pink-100 bg-gradient-to-br from-rose-300 via-rose-400 to-rose-300 font-bold text-white hover:bg-pink-400 block sm:inline-block sm:text-base sm:px-6 sm:py-3"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
