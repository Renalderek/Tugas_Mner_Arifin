/*Ta DA Lanjut Nale Pe Codingan Dari Sini 1:23:08*/

/*Ada yg di tambahkan di file ListCoin/CoinRow.jsx 1:41:42*/

import React from "react";
import { BsChevronDown } from "react-icons/bs";

import buyIcon from "../../images/illustrations/buy.png";
import PrimaryButton from "../buttons/PrimaryButtons";

export default function BuyAndTradeSection() {
  return (
    <div className="container mx-auto py-32">
      <div className="grid grid-cols-2 gap-10">
        <div className="flex items-center">
          <div className="max-w-xl">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Buy & trade on the <br /> original crypto exchange.
            </h2>
            <p className="text-gray mb-6">
              Buy now and get 40% extra bonus Minimum pre-sale anount <br /> 25
              Crypto Coin. We accept BTC crypto-currency
            </p>

            <div className="flex justify-between gap-6 mb-6">
              <div className="border border-primary rounded-2xl py-4 px-6 flex items-center">
                <div className="border-r border-primary pr-6">
                  <small className="text-primary">Anount</small>
                </div>
                <input
                  type="text"
                  value="5,000"
                  className="text-right outline-none w-full"
                />
              </div>
              <div className="border border-primary rounded-2xl py-6 px-8 flex items-center">
                <img
                  src="/cryptocurrencies/usd.png"
                  alt=""
                  className="inline mr-2"
                />
                <span className="mr-4">USD</span>
                <span>
                  <BsChevronDown />
                </span>
              </div>
            </div>

            <div className="flex justify-between gap-6 mb-6">
              <div className="border border-primary rounded-2xl py-4 px-6 flex items-center">
                <div className="border-r border-primary pr-6">
                  <small className="text-primary">Get</small>
                </div>
                <input
                  type="text"
                  value="0,10901"
                  className="text-right outline-none w-full"
                />
              </div>
              <div className="border border-primary rounded-2xl py-6 px-8 flex items-center">
                <img
                  src="cryptocurrencies/btc.png"
                  alt=""
                  className="inline mr-2"
                />
                <span className="mr-4">BTC</span>
                <span>
                  <BsChevronDown />
                </span>
              </div>
            </div>

            <PrimaryButton className="w-full">Buy Now</PrimaryButton>
          </div>
        </div>
        <div>
          <img src={buyIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
