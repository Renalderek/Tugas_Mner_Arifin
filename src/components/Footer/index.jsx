import { BsArrowRight } from "react-icons/bs";
import Logo from "../../images/logo.svg";
import PrimaryButton from "../buttons/PrimaryButtons";
export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto border-y border-lightgray py-6">
        <div className="grid grid-cols-4">
          <div className="flex justify-between p-6 border-r border-lightgray">
            <img src={Logo} alt="logo aja" />
            <ul>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Buy Crypto
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Exchanges
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Watchlist
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Portofolio
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  NFT
                </a>
              </li>
            </ul>
          </div>
          <div className="p-6 flex justify-center border-r border-lightgray">
            <ul>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Products
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Blog
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div className="p-6 flex justify-center border-r border-lightgray">
            <ul>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Help Center
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Contact Us
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  System Status
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Area Avaibility
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="p-6 ">
            <span className="text-gray">Newsletter</span>
            <p className="text-gray font-thin">
              Never miss anything crypto when you`re on the go
            </p>
            <div className="flex gap-1 my-4">
              <input
                type="email"
                className="border border-lightgray rounded-xl p-4 outline-none focus:border: -primary"
                placeholder="Enter Your Email"
              />
              <PrimaryButton className="px-6  aspect-square rounded-md">
                <BsArrowRight />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-6">
        <p className="text-gray">
          © Copyright 2022 NEFA LLC. All rights reserved
        </p>
      </div>
    </footer>
  );
}
