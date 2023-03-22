import styles from "./asset-card.module.css";
import { AssetCardPropsType } from "../../models/asset-list.model";

export default function AssetCard(props: AssetCardPropsType) {
  return (
    <div className="group relative font-bold flex flex-col gap-2 bg-[url(/assetCard.svg)] bg-cover w-80 h-96 pt-24 p-8 items-center cursor-pointer">
      <img
        src={`/tokens/${props.name}.svg`}
        className={`${styles.border_inset_outline} ${
          styles[`${props.name}_bg`]
        } w-24 h-24 p-6 rounded-full absolute left-1/2 -translate-x-1/2 -top-10 group-hover:p-0 transition-all duration-700`}
      />

      <div className="text-sm font-bold text-[#737BAE]">{props.title}</div>
      <div
        className={`${styles.border_inset_outline} relative p-2 bg-[#14172b] w-full flex justify-center rounded-full`}
      >
        <div>
          $
          {props.price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 11,
          })}
        </div>
        <div
          className={`absolute right-4 text-xs top-1/2 -translate-y-1/2 ${
            props.fluctuationPercentage < 0 // If the percentage is negative
              ? "text-[#FF4D4D]"
              : "text-[#00FFA3]"
          }`}
        >
          {props.fluctuationPercentage > 0 ? "+" : ""}
          {props.fluctuationPercentage}%
        </div>
      </div>
      <div className="text-sm font-bold text-[#5A5F7D]">Price</div>
      <div
        className={`${styles.border_inset_outline} p-2 bg-[#14172b] w-full flex justify-center rounded-full`}
      >
        ${props.tvl.toLocaleString()}
      </div>
      <div className="text-sm font-bold text-[#5A5F7D]">TVL</div>
      <div
        className={`flex flex-row gap-3 ${styles.border_inset_outline} p-2 px-5 mt-3 bg-[#14172b] justify-center rounded-full`}
      >
        {props.pairs.map((pair, index) => (
          <img src={`/tokens/${pair}.svg`} key={index} alt="" className="h-6" />
        ))}
      </div>
      <div className="text-sm font-bold text-[#5A5F7D]">Popular pairs</div>
    </div>
  );
}
