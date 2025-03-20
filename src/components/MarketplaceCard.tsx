import Image from "next/image";
import { MarketPlaceCardI } from "../../shared.interface";

export default function MarketplaceCard({ image, title, description }: MarketPlaceCardI) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      <div className="overflow-hidden rounded-t-lg">
        <Image src={image} alt={title} width={600} height={400} className="w-full h-56 object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}