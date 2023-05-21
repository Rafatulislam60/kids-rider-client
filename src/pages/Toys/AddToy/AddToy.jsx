import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;

    const picture = form.url.value;
    const name = form.name.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const newToy = {
      picture,
      name,
      seller,
      email,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };
    console.log(newToy);

    fetch("http://localhost:5000/toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Toy added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="card my-10 mx-auto w-full max-w-5xl py-5 shadow-2xl bg-indigo-100">
      <h1 className="text-3xl font-bold text-rose-500 text-center my-5">
        ADD YOUR TOY
      </h1>
      <form onSubmit={handleAddToy}>
        <div className="grid md:grid-cols-2 p-4 md:py-10 md:px-20 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture</span>
            </label>
            <input
              type="text"
              //   value={url}
              name="url"
              placeholder="Enter Toy Url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="seller"
              placeholder="Enter Seller Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="Enter Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub-category</span>
            </label>
            <input
              type="text"
              name="subCategory"
              placeholder="Enter Sub-Category"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Enter Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Enter Rating"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Enter Available Quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Enter Description"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6 mx-2 md:mx-20">
          <input type="submit" value="Add Toy" className="btn btn-success" />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
