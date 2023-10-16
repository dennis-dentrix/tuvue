import { Google } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div>
      <h1>Create Account</h1>

      <form className="w-2/3 mx-auto rounded">
        <div className="bg-white px-3 py-6 w-full">
          <div className="flex justify-around gap-1 mb-3">
            <div className="flex flex-col gap-2">
              <label className="text-black" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="border border-grey rounded-md px-2 py-1 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-black" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                name="firstName"
                className="border border-grey rounded-md px-2 py-1 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-around gap-1">
            <div className="flex flex-col gap-2">
              <label className="text-black" htmlFor="phone">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                className="border border-grey rounded-md px-2 py-1 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="border border-grey rounded-md px-2 py-1 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-around gap-1">
            <div className="flex flex-col gap-2">
              <label className="text-black" htmlFor="phone">
                Location
              </label>
              <input
                type="text"
                name="location"
                className="border border-grey rounded-md px-2 py-1 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black" htmlFor="email">
                Password
              </label>
              <input
                type="password"
                name="passowrd"
                className="border border-grey rounded-md px-2 py-1 focus:outline-none"
              />
            </div>
          </div>
          <p className="py-4">
            I have an account already{" "}
            <Link className="border-b border-green text-maroon">Login</Link>
          </p>
        </div>

        <div className="flex items-center gap-3 my-4 pl-7">
          <button className="bg-green rounded-lg text-white px-3 py-2 w-24">
            Signup
          </button>
          <p>or</p>
          <button className="flex items-center gap-1 bg-maroon px-3 py-2 rounded-md w-24">
            <Google /> <span className="text-white">Google</span>
          </button>
        </div>
      </form>
    </div>
  );
}
