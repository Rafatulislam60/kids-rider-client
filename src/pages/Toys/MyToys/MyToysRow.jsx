import { Link } from "react-router-dom";

const MyToysRow = ({ toy, handleDelete }) => {
  const {
    _id,
    picture,
    name,
    seller,
    email,
    subCategory,
    price,
    rating,
    quantity,
    description,
  } = toy;



  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {picture && (
              <img src={picture} alt="Avatar Tailwind CSS Component" />
            )}
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{seller}</td>
      <td>{email}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{rating}</td>
      <td>{quantity}</td>
      <td>{description}</td>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <th>
        <Link to={`updateToy/${_id}`}>
          <button className="btn btn-ghost">Update</button>
        </Link>
      </th>
    </tr>
  );
};

export default MyToysRow;
