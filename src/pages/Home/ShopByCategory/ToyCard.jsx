import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { _id, picture, toyName, price, rating } = toy || {};
  return (
    <div className="card w-full md:w-96 mx-3 md:mx-auto bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={picture} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl">
          <span className="text-3xl text-rose-500 font-bold">Name:</span>{" "}
          {toyName}
        </h2>
        <p className="text-3xl font-bold">
          <span className="text-3xl text-rose-500 font-bold">Price:</span>{" "}
          {price}
        </p>
        <p className="text-3xl font-bold mb-5">
          <span className="text-3xl text-rose-500 font-bold">Rating</span>{" "}
          {rating}
        </p>
        <div className="card-actions">
          <Link to={`/details/${_id}`}>
            <button className="btn btn-success">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
