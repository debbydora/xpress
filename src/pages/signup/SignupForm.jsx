import React from "react";
import InputField from "../../components/InputField";
import { businessCategories, nigerianStates } from "../../utils/data";
import ImageUploader from "../../components/ImageUploader";
import Button from "../../components/Button";
import { toast } from "react-toastify";

const SignupForm = ({
  register,
  errors,
  image,
  setImage,
  setStep,
  step,
  handleSubmit,
  onSubmit,
}) => {
  const handleNext = () => {
    if (!image) {
      toast.error("image must be selected", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="!bg-white rounded-lg shadow-custom-light p-10 flex flex-col w-[522px] my-10">
      <section aria-label="form-header-texts" className="flex flex-col gap-1">
        <h1 className=" text-primary font-medium text-[24px]">
          Welcome to Xpress Rewards
        </h1>
        <p className="text-[#606060] text-xs">
          Complete the form below to get started
        </p>
        <hr className="mt-4 border-2 border-[#F5F6F8]" />
      </section>
      <section aria-label="form-body" className="flex flex-col mt-6">
        {step === 1 && (
          <>
            <h1 className="text-[14px] text-primary font-medium ">
              Business Information
            </h1>
            <div
              aria-label="registeration-form-1"
              className="mt-4 w-full flex flex-col gap-3"
            >
              <div className="w-full">
                <InputField
                  label="Business Name"
                  id="name"
                  name="name"
                  type="text"
                  register={register}
                  required={true}
                />
                <small className="text-red-400 relative top-[-1rem] ">
                  {errors.name?.message}
                </small>
              </div>
              <div className="w-full">
                <InputField
                  label="Business Email Address"
                  id="businessEmail"
                  name="businessEmail"
                  type="email"
                  register={register}
                  required={true}
                />
                <small className="text-red-400 relative top-[-1rem]">
                  {errors.businessEmail?.message}
                </small>
              </div>
              <div className="w-full">
                <InputField
                  label="Business Phone Number"
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  register={register}
                  required={true}
                />
                <small className="text-red-400 relative top-[-1rem]">
                  {errors.phoneNumber?.message}
                </small>
              </div>
              <div className="w-full">
                <InputField
                  label="Business Category"
                  id="category"
                  name="category"
                  type="select"
                  accessor="label"
                  options={businessCategories}
                  register={register}
                  required={true}
                />
                <small className="text-red-400 relative top-[-1rem] ">
                  {errors.category?.message}
                </small>
              </div>
              <div className="w-full">
                <InputField
                  label="Account No"
                  id="acctNumber"
                  name="acctNumber"
                  type="text"
                  register={register}
                  required={true}
                />
                <small className="text-red-400 relative top-[-1rem] ">
                  {errors.acctNumber?.message}
                </small>
              </div>
              <div className="w-full">
                <label
                  htmlFor="image"
                  className={` text-textBlack text-[14px] font-medium `}
                >
                  Image(Logo)
                </label>
                <ImageUploader image={image} setImage={setImage} />
              </div>
              <div className="w-full flex gap-x-3 items-center mt-4">
                <Button
                  text="Next"
                  onClick={handleSubmit(handleNext)}
                  className="bg-primary text-white p-4 rounded shadow-button-light text-sm w-[185px]"
                />
                <p className="text-[#808080] text-sm ">Step 1 of 2</p>
              </div>
            </div>
          </>
        )}
        {step === 2 && (
          <form className=" w-full flex flex-col gap-3">
            <h1 className="text-[14px] text-primary font-medium mb-4">
              Business Address
            </h1>
            <div className="w-full flex justify-between gap-x-4">
              <div className="w-[40%]">
                <InputField
                  label="House Number"
                  id="houseNumber"
                  name="houseNumber"
                  type="number"
                  register={register}
                  required={true}
                />
                <small className="text-red-400 relative top-[-1rem] ">
                  {errors.houseNumber?.message}
                </small>
              </div>
              <div className="w-full">
                <InputField
                  label="Street"
                  id="street"
                  name="street"
                  type="text"
                  register={register}
                  required={true}
                />
                <small className="text-red-400 relative top-[-1rem] ">
                  {errors.street?.message}
                </small>
              </div>
            </div>
            <div className="w-full flex justify-between gap-x-4">
              <div className="w-full">
                <InputField
                  label="City"
                  id="city"
                  name="city"
                  type="text"
                  register={register}
                  required={true}
                />
                <small className="text-red-400 relative top-[-1rem] ">
                  {errors.city?.message}
                </small>
              </div>
              <div className="w-full">
                <InputField
                  label="State"
                  id="state"
                  name="state"
                  type="select"
                  accessor="label"
                  options={nigerianStates}
                  register={register}
                  required={true}
                />
                <small className="text-red-400 relative top-[-1rem] ">
                  {errors.state?.message}
                </small>
              </div>
            </div>
            <h1 className="text-[14px] text-primary font-medium mt-4">
              Contact Person Information
            </h1>
            <div className="w-full">
              <InputField
                label="Contact Name"
                id="contactName"
                name="contactName"
                type="text"
                register={register}
                required={true}
              />
              <small className="text-red-400 relative top-[-1rem] ">
                {errors.contactName?.message}
              </small>
            </div>
            <div className="w-full">
              <InputField
                label="Contact Phone Number"
                id="contactPhone"
                name="contactPhone"
                type="text"
                register={register}
                required={true}
              />
              <small className="text-red-400 relative top-[-1rem] ">
                {errors.contactPhone?.message}
              </small>
            </div>
            <div className="w-full">
              <InputField
                label="Contact Email Address"
                id="contactEmail"
                name="contactEmail"
                type="email"
                register={register}
                required={true}
              />
              <small className="text-red-400 relative top-[-1rem] ">
                {errors.contactEmail?.message}
              </small>
            </div>

            <h1 className="text-[14px] text-primary font-medium mt-4">
              Password
            </h1>
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

            <div className="w-full">
              <InputField
                label="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                register={register}
                required={true}
              />
              <small className="text-red-400 relative top-[-1rem] ">
                {errors.confirmPassword?.message}
              </small>
            </div>
            <div className="w-full flex gap-x-3 items-center mt-4">
              <Button
                text="Submit"
                onClick={handleSubmit(onSubmit)}
                className="bg-primary text-white p-4 rounded shadow-button-light text-sm w-[185px]"
              />
              <p className="text-[#808080] text-sm ">Step 2 of 2</p>
            </div>
          </form>
        )}
      </section>
    </div>
  );
};

export default SignupForm;
