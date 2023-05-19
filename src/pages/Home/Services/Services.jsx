const Services = () => {
  return (
    <div className="my-20">
      <div className="text-center mb-20">
        <h2 className="text-2xl font-bold text-rose-500 w-full lg:leading-tight sm:text-4xl lg:text-5xl ">
          Our Services
        </h2>
        <p className="text-lg font-semibold text-gray-600">What we provide.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20 lg:gap-3">
        <div className="relative px-3">
            <div className="absolute left-40 -top-14 lg:left-28 lg:-top-14">
                <img className="w-20 h-20 rounded-full border p-1" src="https://img.freepik.com/free-vector/classic-delivery-truck-with-flat-design_23-2147677195.jpg?size=626&ext=jpg&ga=GA1.1.1886416881.1678857576&semt=ais" alt="" />
            </div>
            <div className="text-center px-5 py-8 border-2 border-gray-300 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold">Worldwide Shipping</h3>
                <p className="text-xl font-semibold text-gray-600">On Order Over $99</p>
            </div>
        </div>
        <div className="relative px-3">
            <div className="absolute left-40 -top-14 lg:left-28 lg:-top-14">
                <img className="w-20 h-20 rounded-full border p-1" src="https://img.freepik.com/free-vector/call-center_24877-49036.jpg?size=626&ext=jpg&ga=GA1.1.1886416881.1678857576&semt=ais" alt="" />
            </div>
            <div className="text-center px-5 py-8 border-2 border-gray-300 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold">24 X 7 Free Support</h3>
                <p className="text-xl font-semibold text-gray-600">Online Support</p>
            </div>
        </div>
        <div className="relative px-3">
            <div className="absolute left-40 -top-14 lg:left-28 lg:-top-14">
                <img className="w-20 h-20 rounded-full border p-1" src="https://img.freepik.com/free-vector/gift-box-flat-design_1095-129.jpg?size=626&ext=jpg&ga=GA1.1.1886416881.1678857576&semt=ais" alt="" />
            </div>
            <div className="text-center px-5 py-8 border-2 border-gray-300 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold">Special Gift Cards</h3>
                <p className="text-xl font-semibold text-gray-600">Give The Perfect Gift</p>
            </div>
        </div>
        <div className="relative px-3">
            <div className="absolute left-40 -top-14 lg:left-28 lg:-top-14">
                <img className="w-20 h-20 rounded-full border p-1" src="https://img.freepik.com/free-vector/vector-illustration-retro-style-hand-giving-money-other-hand_1284-42589.jpg?size=626&ext=jpg&ga=GA1.1.1886416881.1678857576&semt=ais" alt="" />
            </div>
            <div className="text-center px-5 py-8 border-2 border-gray-300 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold">Worldwide Shipping</h3>
                <p className="text-xl font-semibold text-gray-600">On Order Over $99</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
