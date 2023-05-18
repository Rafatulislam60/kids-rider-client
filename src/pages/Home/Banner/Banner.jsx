import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[#d0f1fd] mb-16 flex lg:flex-cols lg:justify-around lg:px-14 mx-auto px-4 py-5">
      <div>
        <h1 className="text-2xl font-bold w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl">
          Fun and Easy <br /> to hire <br />{" "}
          <span className="text-indigo-500">Master Chef</span>
        </h1>
        <p className="my-6 text-xs sm:text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-900">
          Explore thousands of master chef with all the information you need.
          You can find here your future chef. Come find it. Manage chef for your
          cuisine in a easy and fun process.
        </p>
        <Link to="/">
          <button
            type="button"
            className="btn border-none bg-gradient-to-r from-indigo-500 to-indigo-400"
          >
            Get Started
          </button>
        </Link>
      </div>
      <div>
        <img src='https://img.freepik.com/free-vector/boy-driving-mini-car-toy-white-background_1308-75943.jpg?w=740&t=st=1684393103~exp=1684393703~hmac=9c76b1aa8921d5eb45a070932995c4199a0450a4419700c064b850c8e5e736d0' alt="" />
      </div>
    </div>
  );
};

export default Banner;
