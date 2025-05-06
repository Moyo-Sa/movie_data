import React from "react";

const Container = ({ children }) => {
  return (
    <div className="bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-6 flex flex-col items-center max-w-lg text-center">
      {children}
    </div>
  );
};

export default Container;
