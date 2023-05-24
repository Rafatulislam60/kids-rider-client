import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const toys = useLoaderData();
  console.log(toys);
  const [myToys, setMyToys] = useState(toys);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://y-liart-alpha.vercel.app/toy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining = myToys.filter((myToy) => myToy._id !== _id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="btn-group my-5 flex justify-center">
        <button className="btn btn-active">Price: Low to High</button>
        <button className="btn">Price: High to Low</button>
      </div>
      <h2 className="text-4xl text-center font-bold my-5">
        Your bookings: {toys.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Seller</th>
              <th>Email</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Available Quantity</th>
              <th>Description</th>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <MyToysRow
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
