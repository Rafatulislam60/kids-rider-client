const Gallery = () => {
  return (
    <div className="my-10">
      <div className="text-center">
        <div className="flex flex-row items-center justify-center">
          <hr className="pl-20" />
          <div className="flex flex-row items-center justify-center">
            <img
              className="w-10 h-10 rounded"
              src="https://img.freepik.com/free-psd/3d-illustration-children-s-toy-duck-car_23-2149345304.jpg?w=740&t=st=1684402780~exp=1684403380~hmac=5a68b570dcac4a59da579f12a68f6a314daa1b848567857ce003a056f616ba72"
              alt=""
            />
            <hr className="pr-20" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-rose-500 w-full lg:leading-tight sm:text-4xl lg:text-5xl ">
          Kid's Gallery
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
    </div>
  );
};

export default Gallery;
