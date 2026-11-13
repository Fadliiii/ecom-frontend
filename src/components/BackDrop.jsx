import React from 'react';

const BackDrop = ({ data }) => {
  return (
    <div
      className={`fixed inset-0 z-20 bg-slate-500/50 transition-all duration-200 ${
        data ? "top-16" : "top-0"
      }`}
    />
  );
};

export default BackDrop;