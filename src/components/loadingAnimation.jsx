import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="w-16 h-16 border-4 border-t-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingAnimation;
