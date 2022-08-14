import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Hero from "../../assets/image/hero.png";

function Login() {
  const [passwordType, setPasswordType] = useState("password");

  useEffect(() => {
    document.title = "Login | ALO";
  });

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <div className="box-border flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/3">
        <img
          src={Hero}
          alt="hero"
          className="h-[100px] w-full overflow-hidden object-cover sm:h-[200px] lg:h-screen lg:w-full"
        />
      </div>
      <div className="mt-10 flex w-full items-center justify-center dark:bg-[#171717] lg:mt-0 lg:w-1/3">
        <div className="flex w-full flex-col md:px-36 lg:px-[63px]">
          <h2 className="mb-1 text-center text-3xl font-bold text-[#17539B]">
            Masuk
          </h2>
          <div className="flex w-full">
            <p className=" mb-[44px] h-[38px] px-20 text-center text-[15px] text-[#737373] dark:text-white">
              Masuk dengan akun admin yang telah dibuat
            </p>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={async (values) => {}}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              handleBlur,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className="px-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="placeholder:text-md my-2 block h-[48px] w-full rounded-2xl border border-[#737373] py-3 px-4 text-[#737373] dark:border-white dark:bg-[#171717] dark:placeholder:text-white"
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                />
                <span className="block text-xs text-red-500">
                  {errors.email && touched.email && errors.email}
                </span>
                <div className="relative flex flex-row">
                  <input
                    type={passwordType}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="placeholder:text-md my-2 block h-[48px] w-full rounded-2xl border border-[#737373] py-3 px-4 text-[#737373] dark:border-white dark:bg-[#171717] dark:placeholder:text-white"
                    onBlur={handleBlur}
                    value={values.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-3 top-5"
                  >
                    {passwordType === "password" ? (
                      <AiOutlineEyeInvisible className="text-neutral-03 text-2xl" />
                    ) : (
                      <AiOutlineEye className="text-neutral-03 text-2xl" />
                    )}
                  </button>
                </div>
                <span className="block text-xs text-red-500">
                  {errors.password && touched.password && errors.password}
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="hover:bg-olive-02 hover:text-neutral-04 mt-6 mb-4 block h-[48px] w-full rounded-2xl bg-[#17539B] py-3 px-6 text-center text-white transition duration-300"
                >
                  {" "}
                  Masuk
                </button>
                <span className="flex justify-center text-sm">
                  <Link
                    to="/forgot"
                    className="mx-2 text-sm text-[#737373] hover:underline dark:text-white"
                  >
                    Lupa Password?
                  </Link>
                </span>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
