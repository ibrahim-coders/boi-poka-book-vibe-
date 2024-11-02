import BannderImage from '../Image/pngwing 1.png';

const Banner = () => {
  return (
    <>
      <div className="hero  bg-base-200  p-4 md:p-20 ">
        <div className="hero-content flex flex-col-reverse items-center lg:flex-row-reverse lg:justify-between lg:items-center gap-6">
          <img
            src={BannderImage}
            className="w-full h-96 max-w-sm "
            alt="Banner"
          />
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold space-y-4 p-4">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn bg-green-600 text-white mt-4 md:mt-6">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
