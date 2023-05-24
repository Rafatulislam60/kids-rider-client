import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/myToys";

  const toy = useLoaderData();
  const { _id, price, quantity, description } = toy;

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;

    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToy = {
      price,
      quantity,
      description,
    };
    console.log(updatedToy);

    fetch(`https://y-liart-alpha.vercel.app/toy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Toy updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate(from, { replace: true });
      });
  };

  return (
    <div className="card my-10 mx-auto w-full max-w-5xl py-5 shadow-2xl bg-indigo-100">
      <h1 className="text-3xl font-bold text-rose-500 text-center my-5">
        UPDATE YOUR TOY
      </h1>
      <form onSubmit={handleUpdateToy}>
        <div className="grid md:grid-cols-2 p-4 md:py-10 md:px-20 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="number"
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
          <input type="submit" value="Update Toy" className="btn btn-success" />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
