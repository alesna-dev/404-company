import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 px-4 h-full">
      <Hero />
      <ProductList />
    </div>
  );
}
