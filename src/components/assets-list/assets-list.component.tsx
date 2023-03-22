import AssetCard from "../asset-card/asset-card.component";

import assets from "../../models/asset-list.model";

export default function AssetsList() {
  return (
    <section className="mt-20 mx-10">
      <h1 className="flex items-center gap-4 text-lg font-bold">
        <img src="/trendingAsset.svg" className="h-6"></img>
        <span>Trending Assets</span>
      </h1>

      <div className="flex flex-row gap-8 gap-y-24 py-32 flex-wrap justify-center">
        {assets.map((asset, index) => (
          <AssetCard {...asset} key={index} />
        ))}
      </div>
    </section>
  );
}
