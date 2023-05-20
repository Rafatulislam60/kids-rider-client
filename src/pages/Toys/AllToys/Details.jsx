import { useLoaderData } from "react-router-dom";

const Details = () => {
  const toys = useLoaderData();
  const {
    seller,
    _id,
    price,
    availableQuantity,
    rating,
    detailsDescription,
    picture,
    toyName,
  } = toys;

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center">
          <img
            src={picture}
            className="lg:max-w-sm rounded-lg mx-auto shadow-2xl mb-8 border-2 border-white"
            alt=""
          />
          <h1 className="text-3xl font-bold">
            <span className="text-3xl font-bold text-red-500">Name:</span>{" "}
            {toyName}
          </h1>
          <h1 className="text-2xl font-bold">
            <span className="text-3xl font-bold text-red-500">Seller:</span>{" "}
            {seller}
          </h1>
          <p className="text-xl font-bold">
            <span className="text-3xl font-bold text-rose-500">Price:</span> $
            {price}
          </p>
          <p className="text-xl font-bold">
            <span className="text-3xl font-bold text-rose-500">Rating:</span>{" "}
            {rating}
          </p>
          <p className="text-xl font-bold">
            <span className="text-3xl font-bold text-rose-500">
              Available Quantity:
            </span>{" "}
            {availableQuantity}
          </p>
          <p className="py-3 mx-2 lg:mx-12 text-xl">
            <span className="text-3xl font-bold text-rose-500">
              Description:
            </span>{" "}
            {detailsDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
