
import emoji from "react-easy-emoji";
import { BsChevronBarRight, BsPlus } from "react-icons/bs";

export default function CryptocurrencySection() {
  return (
    <section className="mt-18">
      <div className="container rounded-xl bg-white p-8 px-4 shadow">
        <div className="grid grid-cols-3">
          <div className="px-4">
            <div className="flex justify-between mb-6">
              <span className="font-bold text-lg">
                {emoji("🔥 Trending", {
                  props: { style: { className: "inline mr-2 text-normal" } },
                })}
              </span>
              <a href="" className="text-primary">
                More
                <BsChevronBarRight className="inline ml-2" />
              </a>
            </div>
            <div>
              <div className="grid grid-cols-3 mb-4">
                <span className="text-gray">Name</span>
                <span className="text-gray">Price</span>
                <span className="text-gray">Chart</span>
              </div>
              <div className="grid grid-cols-3">
                <div>Bitscoin</div>
                <div className="flex items-center">
                  <BsPlus className="text-gren inline mr-2" />
                  $43,183,13
                </div>
              </div>
            </div>

import ListCoin from "../ListCoin/index";

const trendingCoins = [
  {
    image: "/cryptocurrencies/bitcoin.png",
    name: "Bitcoin",
    price: "$43,180.13",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/etherium.png",
    name: "Bitcoin",
    price: "$3,480.65",
    uptrend: false,
  },
  {
    image: "/cryptocurrencies/solana.png",
    name: "Bitcoin",
    price: "$150,20",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/doge.png",
    name: "Bitcoin",
    price: "$0,1572",
    uptrend: true,
  },
];
const gainerCoins = [
  {
    image: "/cryptocurrencies/pappay.png",
    name: "PAPPAY",
    price: "$0.00374",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/bitcoinasia.png",
    name: "Bitcoin Asia",
    price: "$0.02096",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/moonrock.png",
    name: "Moon Rock",
    price: "$0.004907",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/ninjafloki.png",
    name: "Ninja Floki",
    price: "$0.000123",
    uptrend: true,
  },
];
const recentlyCoins = [
  {
    image: "/cryptocurrencies/metacraft.png",
    name: "Metacraft",
    price: "$0.0608",
    uptrend: false,
  },
  {
    image: "/cryptocurrencies/frog.png",
    name: "Frog",
    price: "$0.5875",
    uptrend: false,
  },
  {
    image: "/cryptocurrencies/muskdoge.png",
    name: "Musk Doge",
    price: "$0.04041",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/2share.png",
    name: "2 Share",
    price: "$1,366.24",
    uptrend: true,
  },
];

export default function CryptocurrencySection() {
  return (
    <section className="relative md:-mt-10">
      <div className="mx-auto rounded-3xl lg:mx-8 bg-white py-8 px-4 shadow-lg">
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
          <div className="px-4 mb-6 lg:mb-0">
            <ListCoin title="🔥 Trending" data={trendingCoins} more="/" />
          </div>
          <div className="px-4 mb-6 lg:mb-0">
            <ListCoin title="🚀  Top Gainers " data={gainerCoins} more="/" />
          </div>
          <div className="px-4 mb-6 lg:mb-0">
            <ListCoin
              title="💎  Recently Added"
              data={recentlyCoins}
              more="/"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
