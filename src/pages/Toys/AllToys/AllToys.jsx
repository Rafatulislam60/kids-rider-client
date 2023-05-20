import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toys = useLoaderData();


  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full text-center">
        <thead>
          <tr>
            <th></th>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-Category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((allToy, index) => (
            <tr key={allToy._id}>
              <td>{index + 1}</td>
              <td>{allToy.seller}</td>
              <td>{allToy.toyName}</td>
              <td>{allToy.subCategory}</td>
              <td>{allToy.price}</td>
              <td>{allToy.availableQuantity}</td>
              <td>
                <Link to={`/details/${allToy._id}`}>
                <button className="btn">View Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
