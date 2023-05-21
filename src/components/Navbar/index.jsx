import Logo from "../../images/logo.svg";
export default function Navbar() {
  return (
    <div className="py-4 flex">
      <div className="flex mr-6">
        <img src={Logo} alt="neva" />
      </div>
      <div>
        <nav className="flex">
          <a href="" className="mx-4 mr-5">
            Cryptocurrency
          </a>
          <a href="" className="mx-4">
            Exchanges
          </a>
          <a href="" className="mx-4">
            Watchlist
          </a>
          <a href="" className="mx-4">
            NFT
          </a>
          <a href="" className="mx-4">
            Portofolios
          </a>
          <a href="" className="mx-4">
            Product
          </a>
        </nav>
      </div>
    </div>
  );
}
