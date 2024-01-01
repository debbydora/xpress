import React from "react";
import Logo from "../../icons/Logo.svg";
import Button from "../../components/Button";
import SignupForm from "./SignupForm";
import Modal from "../../components/Modal";
import { CiCircleAlert } from "react-icons/ci";
import useSignup from "./useSignup";

const Signup = () => {
  const {
    navigate,
    register,
    handleSubmit,
    errors,
    openModal,
    setOpenModal,
    step,
    setStep,
    image,
    setImage,
    onSubmit,
  } = useSignup();

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
            Already have an account?
          </p>
          <Button
            onClick={() => navigate("/login")}
            text="Sign in"
            aria-label="sign-in button"
            className="text-primary font-bold md:text-sm text-xs px-4 py-2 border border-primary rounded-[4px]"
          />
        </div>
      </section>
      <section
        aria-label="form-section"
        className="flex justify-center flex-col items-center"
      >
        <SignupForm
          register={register}
          errors={errors}
          image={image}
          setImage={setImage}
          step={step}
          setStep={setStep}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </section>

      <Modal
        isOpen={openModal}
        closeModal={() => setOpenModal(false)}
        className="absolute top-[30%] w-[400px]"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="p-4 bg-lightYellow rounded-md">
            <CiCircleAlert color={"#FF9900"} className="h-[30px] w-[30px]" />
          </div>
          <h1 className="text-pendingYellow text-[24px] font-medium mt-1">
            Pending
          </h1>

          <p className="text-textBlack text-center text-sm mt-5">
            Your registration is awaiting approval from our partnership team
          </p>
          <Button
            onClick={() => {
              setOpenModal(false);
              navigate("/login");
            }}
            text="Done"
            className="w-full text-white bg-primary mt-10 font-medium text-sm rounded text-center py-4 shadow-button-light"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Signup;
