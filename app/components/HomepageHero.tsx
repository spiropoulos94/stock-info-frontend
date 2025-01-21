"use client";

import React from "react";

const HomepageHero: React.FC = () => {
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement search logic here
    alert("Search submitted!");
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 w-full rounded-xl">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Search for Any Stock, Fund or ETF
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Get a quick summary of its current state and make informed decisions.
        </p>
        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <input
            type="text"
            placeholder="Enter stock symbol or company name"
            className="w-full max-w-full lg:max-w-xl py-3 px-4 rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-yellow-500 text-blue-800 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default HomepageHero;
