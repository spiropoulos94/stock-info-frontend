import { getStockInfo } from "@/app/actions/stocks/getStockInfo";
import MarkdownRenderer from "@/app/components/markdown/MarkdownRenderer";
import { formatMarkdown } from "@/utils/markdown/formatMarkdown";


interface StockPageParams {
    params: {
      id: string;
    };
  }

export default async function StockPage({params}:StockPageParams) {
    const stockID = await params.id;
    console.log(stockID);
     const stockInfo = await getStockInfo(stockID);
     console.log(stockInfo);
      // const formattedMarkdown = await formatMarkdown(stockInfo);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        This is the stock page {params.id}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <MarkdownRenderer markdown={stockInfo} />
      </main>
    </div>
  );
}
