import { getStockInfo } from "@/app/actions/stocks/getStockInfo";
import MarkdownRenderer from "@/app/components/markdown/MarkdownRenderer";
import { formatMarkdown } from "@/utils/markdown/formatMarkdown";

interface StockPageParams {
  params: {
    id: string;
  };
}

export default async function StockPage({ params }: StockPageParams) {
  const stockID = params.id;
  const stockInfo = await getStockInfo(stockID);
  // const formattedMarkdown = await formatMarkdown(stockInfo);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-8 pb-20 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)] ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <MarkdownRenderer markdown={stockInfo} />
      </main>
    </div>
  );
}
