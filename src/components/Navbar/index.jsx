import { BsChevronDown } from "react-icons/bs";
import Logo from "../../images/logo.svg";
import PrimaryButton from "../buttons/PrimaryButtons";
import SecondaryButton from "../buttons/SecondaryButton";

export default function Navbar() {
  return (
    <nav className="bg-primary bg-opacity-5">
      <div className="sticky container mx-auto top-0 py-8 flex justify-between items-center">
        <div className="flex items-center ">
          <img src={Logo} className="mr-6" alt="neva" />
          <div className="flex">
            <a href="/" className="mx-6  hover:text-primary">
              Cryptocurrency
            </a>
            <a href="/" className="mx-6 hover:text-primary">
              Exchanges
            </a>
            <a href="/" className="mx-6 hover:text-primary">
              Watchlist
            </a>
            <a href="/" className="mx-6 hover:text-primary">
              NFT
            </a>
            <a href="/" className="mx-6 hover:text-primary">
              Portofolios
            </a>
            <a href="/" className="mx-6 hover:text-primary">
              Product <BsChevronDown className="inline ml-2" />
            </a>
          </div>
        </div>
        <div className="flex">
          <SecondaryButton className="mr-4">Sign In</SecondaryButton>
          <PrimaryButton>Sign Up</PrimaryButton>
        </div>
      </div>
    </nav>
  );
}
