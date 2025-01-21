"use client";

import React from "react";
import Link from "next/link";

const StockList: React.FC = () => {
  // Define stocks with unique IDs
  const stocks = [
    { id: 1, label: "Tesla", value: "tesla" },
    { id: 2, label: "ASML", value: "asml" },
    { id: 3, label: "Apple", value: "apple" },
    { id: 4, label: "NVIDIA", value: "nvidia" },
    { id: 5, label: "Microsoft", value: "microsoft" },
    { id: 6, label: "Google", value: "google" },
    { id: 7, label: "Amazon", value: "amazon" },
    { id: 8, label: "Meta", value: "meta" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-5">
      {stocks.map((stock) => (
        <Link key={stock.id} href={`/stocks/${stock.value}`} passHref>
          <div className="h-[80px] bg-white text-gray-800 border border-gray-200 rounded-lg cursor-pointer flex items-center justify-between p-4 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg group">
            <span className="font-semibold text-lg">{stock.label}</span>
            <span className="text-gray-600 opacity-1 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default StockList;
