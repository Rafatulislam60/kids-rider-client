import { FaQuoteLeft } from "react-icons/fa";

const ClientSays = () => {
  return (
    <div className="my-20">
      <div className="text-center mb-10">
        <div className="flex flex-row items-center justify-center">
          <hr className="pl-20 h-1 bg-indigo-300" />
          <div className="flex flex-row items-center justify-center">
            <img
              className="w-14 h-14 rounded-full"
              src="https://img.freepik.com/free-psd/3d-illustration-children-s-toy-duck-car_23-2149345304.jpg?w=740&t=st=1684402780~exp=1684403380~hmac=5a68b570dcac4a59da579f12a68f6a314daa1b848567857ce003a056f616ba72"
              alt=""
            />
            <hr className="pr-20 h-1 bg-indigo-300" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-rose-500 w-full lg:leading-tight sm:text-4xl lg:text-5xl ">
          Our Client Says
        </h2>
        <p className="text-lg font-semibold text-gray-600">
          Feedback we get from our honorable client.
        </p>
      </div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="w-full card bg-base-100 shadow-xl text-center">
            <div className="card-body space-y-5 p-16 md:p-28 relative">
              <FaQuoteLeft className="text-success text-5xl absolute right-1/2 top-3 lg:top-12" />
              <p className="text-xl font-semibold text-gray-400">
                I purchased the XYZ Toy Set for my child, and I am incredibly
                impressed with the quality and durability of the toys. Not only
                are they fun and engaging, but they have also withstood the test
                of time, even with my child's rough play. The attention to
                detail in the design is remarkable, and it has sparked my
                child's imagination and creativity. I highly recommend this toy
                set to other parents looking for a high-quality and entertaining
                option for their kids.
              </p>
              <h2 className="text-4xl font-bold text-rose-400">ALEX JOHN</h2>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="w-full card bg-base-100 shadow-xl text-center">
            <div className="card-body space-y-5 p-16 md:p-28 relative">
              <FaQuoteLeft className="text-success text-5xl absolute right-1/2 top-3 lg:top-12" />
              <p className="text-xl font-semibold text-gray-400">
                I want to express my gratitude to this toy company for creating
                such amazing toys. Not only are they entertaining, but they also
                promote learning and development. The durability and
                craftsmanship are impressive. My kids are absolutely in love
                with their new toys!
              </p>
              <h2 className="text-4xl font-bold text-rose-400">EMILY THOMPSON</h2>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="w-full card bg-base-100 shadow-xl text-center">
            <div className="card-body space-y-5 p-16 md:p-28 relative">
              <FaQuoteLeft className="text-success text-5xl absolute right-1/2 top-3 lg:top-12" />
              <p className="text-xl font-semibold text-gray-400">
                I am beyond thrilled with the toys I purchased from this
                company. The attention to detail and quality is outstanding. My
                kids are completely engrossed in imaginative play, and I
                appreciate the educational value infused into each toy. Highly
                recommended!
              </p>
              <h2 className="text-4xl font-bold text-rose-400">DAVID RODRIGUEZ</h2>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="w-full card bg-base-100 shadow-xl text-center">
            <div className="card-body space-y-5 p-16 md:p-28 relative">
              <FaQuoteLeft className="text-success text-5xl absolute right-1/2 top-3 lg:top-12" />
              <p className="text-xl font-semibold text-gray-400">
                I recently bought the ABC Stuffed Animal from your toy company,
                and I wanted to express my utmost satisfaction with the product.
                The plush material is incredibly soft and cuddly, and the
                stitching is top-notch, ensuring the toy's longevity. My child
                has developed an instant attachment to this adorable stuffed
                animal, carrying it everywhere they go. The attention to detail
                in the design, from the cute facial features to the vibrant
                colors, is truly impressive. Thank you for creating such a
                wonderful and lovable toy!
              </p>
              <h2 className="text-4xl font-bold text-rose-400">SOPHIA CHEN</h2>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSays;
