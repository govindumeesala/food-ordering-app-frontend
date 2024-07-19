import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div>
      <img
        src={hero}
        alt="hero image"
        className="w-full max-h-[600px] object-cover"
      />
    </div>
  );
};

export default Hero;
