"use server";

export const getStockInfo = async (stockSymbol: string) => {
  try {
    const response = await fetch(`http://localhost:8080/stock/${stockSymbol}`);
    const data = await response.json();
    return data.summary;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// "use server";

// export const getStockInfo = async (stockSymbol: string) => {
//   try {
//     const simulateDelay = (ms: number) =>
//       new Promise((resolve) => setTimeout(resolve, ms));

//     // Simulate a 1-hour delay (1 hour = 3600000 ms)
//     await simulateDelay(3600000);

//     const response = await fetch(`http://localhost:8080/stock/${stockSymbol}`);
//     const data = await response.json();
//     return data.summary;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
