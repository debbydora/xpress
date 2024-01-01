import React from "react";
import Logo from "../../icons/Logo.svg";
import Button from "../../components/Button";
import InputField from "../../components/InputField";

import useLogin from "./useLogin";
import Modal from "../../components/Modal";

const Login = () => {
  const {
    navigate,
    isLoading,
    register,
    handleSubmit,
    errors,
    handleLogin,
    openReset,
    setOpenReset,
    handlePasswordReset,
  } = useLogin();

  return (
    <div className="w-full bg-[#F5F6F8] min-h-screen ">
      <section
        className="md:px-24 px-4 md:py-10 py-6 flex justify-between items-center"
        aria-label="Header"
        id="header"
      >
        <div className="md:h-[30px] md:w-[143px] w-[70px]">
          <img src={Logo} className="" alt="logo" aria-label="header-Logo" />
        </div>
        <div className="flex items-center gap-x-2" aria-label="header-text">
          <p className="md:text-sm text-xs text-[#606060]">
            New to Xpress Rewards?
          </p>
          <Button
            onClick={() => navigate("/signup")}
            text={"Sign up"}
            aria-label="sign-in button"
            className="text-primary font-bold md:text-sm text-xs px-4 py-2 border border-primary rounded-[4px]"
          />
        </div>
      </section>
      <section
        aria-label="form-section"
        className="flex justify-center flex-col items-center relative"
      >
        <div className="!bg-white rounded-lg shadow-custom-light p-10 flex flex-col md:w-[522px] md:my-10 my-10">
          <div aria-label="form-header-texts" className="flex flex-col gap-1">
            <h1 className=" text-primary font-medium text-[24px]">
              Welcome Back!
            </h1>
            <p className="text-[#606060] text-xs">
              Sign in to your Xpress reward partner’s dashboard
            </p>
            <hr className="mt-4 border-2 border-[#F5F6F8]" />
          </div>
          <div
            aria-label="signIn-form"
            className="mt-4 w-full flex flex-col gap-3"
          >
            <div className="w-full">
              <InputField
                label="Email Address"
                id="email"
                name="businessEmail"
                type="email"
                register={register}
                required={true}
              />
              <small className="text-red-400 relative top-[-1rem] ">
                {errors.businessEmail?.message}
              </small>
            </div>
            <div className="w-full">
              <InputField
                label="Password"
                id="password"
                name="password"
                type="password"
                register={register}
                required={true}
              />
              <small className="text-red-400 relative top-[-1rem] ">
                {errors.password?.message}
              </small>
            </div>
            <div className="w-full -mt-2">
              <p className="text-sm text-[#606060]">
                Forgot Password?{" "}
                <span
                  onClick={() => setOpenReset(true)}
                  className="text-primary font-medium"
                  role="button"
                >
                  Reset it
                </span>
              </p>
            </div>
            <Button
              text={isLoading ? "Signing in..." : "Sign in"}
              onClick={handleSubmit(handleLogin)}
              className="bg-primary text-white p-4 rounded shadow-button-light text-sm w-full mt-4"
            />
          </div>
        </div>
      </section>
      <Modal
        isOpen={openReset}
        closeModal={() => setOpenReset(false)}
        className="absolute top-[25%] w-[400px]"
      >
        <div className="flex flex-col justify-center items-center ">
          <h1 className=" text-primary font-medium text-[24px]">
             Reset your Password!
          </h1>
          <div className="w-full mt-4">
            <InputField
              label="Email Address"
              id="email"
              name="businessEmail"
              type="email"
              register={register}
              required={true}
            />
            <small className="text-red-400 relative top-[-1rem] ">
              {errors.businessEmail?.message}
            </small>
          </div>
          <div className="w-full">
            <InputField
              label="Old Password"
              id="password"
              name="password"
              type="password"
              register={register}
              required={true}
            />
            <small className="text-red-400 relative top-[-1rem] ">
              {errors.password?.message}
            </small>
          </div>
          <div className="w-full">
            <InputField
              label="New Password"
              id="newPassword"
              name="newPassword"
              type="password"
              register={register}
              required={true}
            />
            <small className="text-red-400 relative top-[-1rem] ">
              {errors.newPassword?.message}
            </small>
          </div>

          <Button
            onClick={handleSubmit(handlePasswordReset)}
            text="Done"
            className="w-full text-white bg-primary mt-4 font-medium text-sm rounded text-center py-4 shadow-button-light"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Login;
