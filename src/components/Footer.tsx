import appLogo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-orange-500 py-6 mb-4">
      <div className="container mx-auto flex flex-col gap-4 md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={appLogo} style={{ height: "40px" }} />
          <span className="text-3xl font-bold text-white tracking-tight">
            EatsExpress
          </span>
        </div>

        <span className="text-white flex sm:flex-row md:flex-col lg:flex-row gap-2 items-center text-center justify-center">
          <span>&copy; 2024 EatsExpress.</span>
          <span>All rights reserved.</span>
        </span>

        <span className="text-white font-bold tracking-tight flex gap-4">
          <span className="cursor-pointer">Privacy Policy</span>
          <span className="cursor-pointer">Terms of Service</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
