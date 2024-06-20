import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
export default function Home() {
  return (
    <>
      <main className="bg-dark-bg text-dark-txt flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
        <Catalog />
      </main>
    </>
  );
}
