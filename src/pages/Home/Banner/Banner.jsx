import { Link } from "react-router-dom";
import banner from '../../../assets/banner.png';

const Banner = () => {
  return (
    <div className="bg-[#d0f1fd] mb-16 flex lg:flex-row lg:justify-around lg:px-14 mx-auto px-4 py-5">
      <div>
        <h1 className="text-2xl font-bold w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl">
          The Ultimate <br />
          <span className="text-rose-500">Kids Creative</span> <br />
          Toy Store
        </h1>
        <p className="my-6 text-xs sm:text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-900">
          Explore active toy for smart and active kids. Brings fun and non-stop learning for your little ones. Delivering smile with toys. Get your unbeatable fun and learning experience with our creative toy.
        </p>
        <Link to="/allToys">
          <button
            type="button"
            className="btn border-none rounded-xl bg-gradient-to-r from-[#1abc9c] to-[#16a085]"
          >
            Shop Now
          </button>
        </Link>
      </div>
      <div>
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
