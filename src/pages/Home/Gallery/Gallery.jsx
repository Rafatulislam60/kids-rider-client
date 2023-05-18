const Gallery = () => {
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
          Kid's Gallery
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <img className="w-80 h-48" src="https://img.freepik.com/free-photo/low-angle-car-race-siblings_23-2148355146.jpg?size=626&ext=jpg&ga=GA1.2.1886416881.1678857576&semt=ais" alt="" />
        <img className="w-80 h-48" src="https://img.freepik.com/free-photo/father-son-playing-with-toy-cars_23-2148500801.jpg?size=626&ext=jpg&ga=GA1.2.1886416881.1678857576&semt=ais" alt="" />
        <img className="w-80 h-48" src="https://img.freepik.com/free-photo/happy-asian-children-playing-lawn-playground_640221-82.jpg?size=626&ext=jpg&ga=GA1.2.1886416881.1678857576&semt=ais" alt="" />
        <img className="w-80 h-48" src="https://img.freepik.com/free-photo/little-baby-girl-playing-car_155003-6783.jpg?size=626&ext=jpg&ga=GA1.2.1886416881.1678857576&semt=ais" alt="" />
        <img className="w-80 h-48" src="https://img.freepik.com/free-photo/what-s-up-charming-boy-drives-little-white-bmw-s-cabrio_1304-2720.jpg?size=626&ext=jpg&ga=GA1.1.1886416881.1678857576&semt=ais" alt="" />
        <img className="w-80 h-48" src="https://img.freepik.com/free-photo/little-boy-playing-with-wooden-car_23-2148518124.jpg?size=626&ext=jpg&ga=GA1.1.1886416881.1678857576&semt=ais" alt="" />
        <img className="w-80 h-48" src="https://img.freepik.com/free-photo/young-boy-playing-indoors-with-eco-toys_23-2150268108.jpg?size=626&ext=jpg&ga=GA1.1.1886416881.1678857576&semt=ais" alt="" />
        <img className="w-80 h-48" src="https://img.freepik.com/free-photo/vertical-shot-caucasian-kid-playing-with-toys-sandy-playground_181624-39246.jpg?size=626&ext=jpg&ga=GA1.1.1886416881.1678857576&semt=ais" alt="" />
      </div>
    </div>
  );
};

export default Gallery;
