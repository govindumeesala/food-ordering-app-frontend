import landingImg from "../assets/landing.png";
import appDownload from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      {/* card with search -mt-16 reason for overlapping with top element */}
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
      </div>

      {/* get it on playstore section */}
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImg} />
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <span className="text-3xl font-bold tracking-tighter">
            Order takeway even faster!!
          </span>
          <span>
            Download the EatsExpress App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownload} alt="playstore img" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
