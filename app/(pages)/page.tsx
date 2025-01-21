
import HomepageHero from "@/app/components/HomepageHero";
import StockList from "@/app/components/stocks/StockList";


export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center mt-10">
        <HomepageHero />
        <StockList />
    </div>
  );
}
 