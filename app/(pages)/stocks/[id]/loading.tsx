"use client";

import React, { useEffect, useState } from "react";

const LoadingScreen: React.FC = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    "Fetching stocks...",
    "Calculating market trends...",
    "Reading financial articles...",
    "Analyzing data...",
    "Preparing insights...",
    "Finalizing details...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000); // Change message every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Only run once on component mount

  return (
    <div className="w-full mt-10 p-6 bg-gradient-to-r from-blue-600 to-indigo-700 flex flex-col justify-center items-center text-white py-20 rounded-xl">
      <div className="flex items-center justify-center mb-8">
        <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-xl md:text-2xl font-semibold">
        {messages[currentMessageIndex]}
      </p>
    </div>
  );
};

export default LoadingScreen;
