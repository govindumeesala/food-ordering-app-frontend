import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import appLogo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="border-b-2 border-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src={appLogo}
              alt="Burger logo image"
              style={{ height: "40px" }}
            />
          </Link>
          <Link
            to="/"
            className="text-3xl font-bold tracking-tight text-orange-500"
          >
            EatsExpress
          </Link>
        </div>
        <div className="md:hidden">
          <MobileNav></MobileNav>
        </div>
        <div className="hidden md:block">
          <MainNav></MainNav>
        </div>
      </div>
    </div>
  );
};

export default Header;
