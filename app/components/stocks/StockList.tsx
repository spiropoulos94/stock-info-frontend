"use client"

import React from "react";
import Link from "next/link";

const StockList: React.FC = () => {
  // Define stocks
  const stocks = [
    { label: "Tesla", value: "tesla" },
    { label: "ASML", value: "asml" },
    { label: "Apple", value: "apple" },
    { label: "NVIDIA", value: "nvidia" },
  ];

  return (
    <div className="flex flex-wrap gap-4 md:flex-row flex-col">
      {stocks.map((stock) => (
        <Link key={stock.value} href={`/stocks/${stock.value}`} passHref>
          <div
            className="w-full md:w-[200px] h-[70px] border rounded-lg cursor-pointer flex items-center justify-between p-4 transition-transform transform hover:scale-105 hover:shadow-lg group"
          >
            <span className="font-semibold">{stock.label}</span>
            <span className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
              →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default StockList;
