import MarketplaceCard from "./MarketplaceCard";

export default function MarketplaceSection() {
  return (
    <section className="py-20 px-6 bg-gray-200 text-center">
      <h2 className="text-3xl font-semibold mb-6">Explore Our Marketplace</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <MarketplaceCard image="/pic1.jpg" title="Business Essentials" description="Get essential tools for your business." />
        <MarketplaceCard image="/pic2.jpg" title="Office Supplies" description="Stock up on high-quality office essentials." />
        <MarketplaceCard image="/pic3.jpg" title="Tech Gadgets" description="Upgrade with the latest tech innovations." />
      </div>
    </section>
  );
}