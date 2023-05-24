import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const searchRef = useRef(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(`https://y-liart-alpha.vercel.app/allToys?search=${searchText}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  },[searchText]);
  
  const handleSearch = () => {
    console.log(searchRef.current.value);
        setSearchText(searchRef.current.value);
  };

  return (
    <div>
      <div className="flex flex-row my-10 justify-center items-center">
        <input
          // onChange={(e) => setSearchText(e.target.value)}
          ref={searchRef}
          type="text"
          className="p-1 border-2 border-black rounded-lg mr-3"
        />
        <button onClick={handleSearch} className="btn btn-success">
          Search
        </button>
      </div>
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
            {toys?.map((allToy, index) => (
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
    </div>
  );
};

export default AllToys;
