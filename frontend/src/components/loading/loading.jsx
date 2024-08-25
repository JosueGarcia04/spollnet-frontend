import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#141414] z-50">
      <img 
        src="../../../public/spn.svg" 
        alt="Loading" 
        className="h-24 w-24 animate-spin"
      />
    </div>
  );
}