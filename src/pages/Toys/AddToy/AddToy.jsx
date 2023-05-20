import { useLoaderData } from "react-router-dom";

const AddToy = () => {
  const toys = useLoaderData();

  //   const {
  //     seller,
  //     price,
  //     availableQuantity,
  //     rating,
  //     detailsDescription,
  //     picture,
  //     toyName,
  //   } = toys;

  return (
    <div className="card my-10 mx-auto w-full max-w-5xl py-5 shadow-2xl bg-indigo-100">
      <form>
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
          <button className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
