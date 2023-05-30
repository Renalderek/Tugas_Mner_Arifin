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
          </div>
          <div className="px-4"></div>
          <div className="px-4"></div>
        </div>
      </div>
    </section>
  );
}

/*menit ke 55:41 */
