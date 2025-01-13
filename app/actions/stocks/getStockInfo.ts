"use server"

export const getStockInfo = async (stockSymbol:string) => {
    try {
        const response = await fetch(`http://localhost:8080/stock/${stockSymbol}`);
        const data = await response.json();
        return data.summary;

    }catch (error) {
        console.error(error);
        return null;
    }
}