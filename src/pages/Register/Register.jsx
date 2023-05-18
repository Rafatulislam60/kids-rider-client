import { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/12085707_20944201.jpg";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Register = () => {

    const {createUser} = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;
    console.log(name, email, password, photoURL);

    createUser(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.log(error))

  };


  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-success text-center font-bold">Register</h1>
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold"> Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Already have an account?{" "}
              <Link className="text-success font-bold" to="/login">
                Login
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
