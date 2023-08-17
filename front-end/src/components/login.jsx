import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi-browser";
import validate from "../utils/formValidate";
import { getUserByToken, login } from "../services/authService";
import loginImage from "../images/login.png";
import logo from "../images/logo.svg";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(8).required().label("Password"),
  };

  const handleClick = async () => {
    try {
      const error = validate({ email, password }, schema);
      setErrors(error);
      if (error) return;
      const jwt = await login({ email, password });
      const user = await getUserByToken(jwt);
      setUser(user);
      navigate("/dashboard/");
    } catch (ex) {
      setErrors({
        email: "Invalid email or password.",
        password: "Invalid email or password.",
      });
    }
  };

  return (
    <section className="h-screen text-[#352E5B]">
      <div className="w-full md:w-11/12 h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="flex justify-center md:justify-normal shrink-1  grow-0 basis-auto mb-0 w-10/12 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src={loginImage}
              className="hidden md:flex w-full"
              alt="Sample image"
            />
            <Link
              to="/"
              className="flex md:hidden items-center justify-center w-full"
            >
              <img src={logo} className="w-5/12" alt="Sample image" />
            </Link>
          </div>

          <div className="mb-12 md:mb-0 w-11/12 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form className="flex flex-col justify-center">
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-4xl md:text-5xl font-semibold">
                  Sign in
                </p>
              </div>
              <div className="my-6 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>

              <p className="text-sm italic text-red-500">
                {errors && errors?.email}
              </p>
              <input
                type="text"
                name="email"
                className="border rounded-md px-3 py-2 text-lg w-full md:w-10/12 mb-6 focus:border-blue-700"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <p className="text-sm italic text-red-500">
                {errors && errors?.password}
              </p>
              <input
                type="password"
                name="password"
                className="border rounded-md px-3 py-2 text-lg w-full md:w-10/12 mb-6 focus:border-blue-700"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="mr-1 rounded border-gray-300 text-blue-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    type="checkbox"
                    value=""
                    id="exampleCheck2"
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#!" className="hidden md:flex">
                  Forgot password?
                </a>
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="button"
                  className="bg-[#7D67FF] text-white font-semibld rounded-md px-3 py-2 shadow-sm hover:shadow-md"
                  onClick={handleClick}
                >
                  Login
                </button>

                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
