export type AssetCardPropsType = {
  name: string;
  title: string;
  price: number;
  fluctuationPercentage: number;
  tvl: number;

  pairs: Array<string>;
};

export type AssetsListPropType = Array<AssetCardPropsType>;

const assets: AssetsListPropType = [
  {
    name: "bitcoin",
    title: "Bitcoin (BTC)",
    price: 31812.8,
    fluctuationPercentage: 10,
    tvl: 60000,
    pairs: ["solana", "ethereum", "binance_coin"],
  },

  {
    name: "solana",
    title: "Solana (SOL)",
    price: 32.83,
    fluctuationPercentage: -12.32,
    tvl: 60000,
    pairs: ["bitcoin", "ethereum", "binance_coin"],
  },

  {
    name: "ethereum",
    title: "Ethreum (ETH)",
    price: 1466.45,
    fluctuationPercentage: -11.93,
    tvl: 60000,
    pairs: ["solana", "ethereum", "binance_coin"],
  },

  {
    name: "binance_coin",
    title: "Binanace USD (BUSD)",
    price: 1,
    fluctuationPercentage: 0.26,
    tvl: 60000,
    pairs: ["solana", "ethereum", "binance_coin"],
  },

  {
    name: "shiba",
    title: "Shiba Inu (SHIB)",
    price: 0.00000001948,
    fluctuationPercentage: -8.1,
    tvl: 60000,
    pairs: ["solana", "ethereum", "binance_coin"],
  },
];

export default assets;
