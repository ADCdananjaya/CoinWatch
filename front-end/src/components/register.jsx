import { useState } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import validate from "../utils/formValidate";
import image from "../images/register.jpg";
import register from "../services/userService";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});

  const schema = {
    name: Joi.string().required().label("Username"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(8).required().label("Password"),
  };

  const matchPassowrds = () => {
    if (password !== password2)
      setErrors({
        password: "Passwords didn't match",
        password2: "Passwords didn't match",
      });
  };

  const handleClick = async () => {
    try {
      const error = validate({ name, email, password }, schema);
      setErrors(error);
      matchPassowrds();
      if (error || errors) return;
      await register({ name, email, password });
      window.location.href = "/login";
    } catch (ex) {
      setErrors({ name: "Somthing went wrong." });
    }
  };

  return (
    <section className="h-screen text-[#352E5B]">
      <div className="w-full md:w-11/12 h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 w-10/12 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src={image}
              className="hidden md:flex w-11/12"
              alt="Sample image"
            />
          </div>

          <div className="mb-12 md:mb-0 w-11/12 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form className="flex flex-col justify-center">
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-4xl md:text-5xl font-semibold">
                  Sign Up
                </p>
              </div>
              <div className="my-6 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>

              <p className="text-sm italic text-red-500">
                {errors && errors?.name}
              </p>
              <input
                type="text"
                name="username"
                className="border rounded-md px-3 py-2 text-lg w-full md:w-10/12 mb-6 focus:border-blue-700"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

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

              <p className="text-sm italic text-red-500">
                {errors && errors?.password2}
              </p>
              <input
                type="password"
                name="password2"
                className="border rounded-md px-3 py-2 text-lg w-full md:w-10/12 mb-6 focus:border-blue-700"
                placeholder="Confirm password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />

              <div className="text-center lg:text-left">
                <button
                  type="button"
                  className="bg-[#7D67FF] text-white font-semibld rounded-md px-3 py-2 shadow-sm hover:shadow-md"
                  onClick={handleClick}
                >
                  Register
                </button>

                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
