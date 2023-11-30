import Slider from "../../shared/Slider/Slider";

const Banner = () => {
    return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2017/08/12/09/17/industry-2633878_1280.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Your Destination for Quality <span className="text-primary">Gear</span>
            </h1>
            <p className="mb-5">
              Explore a World of Top-notch Gear for Every Adventure et a id
              nisi.
            </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    );
};
export default Banner;