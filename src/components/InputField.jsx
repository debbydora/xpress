import { useState } from "react";
import EyeIconClose from "../icons/EyeIconClose.svg";
import { AiOutlineEye } from "react-icons/ai";

const InputField = ({
  label,
  type,
  options,
  id,
  name,
  value,
  handleChange,
  placeholder,
  boldLabel,
  register,
  required,
  accessor,
  disabled,
  symbol,
  max,
  min,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setFocused] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const handleFocus = () => setFocused(true);
  const handleBlur = (e) => {
    if (!e.currentTarget.contains(document.activeElement)) {
      setFocused(false);
    }
  };

  function validateEmail(email) {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  }

  function validatePhoneNumber(phoneNumber) {
    const phonePattern = /^(?:\+234|234|0[789][01][0-9]{8})$/;
    return phonePattern.test(phoneNumber);
  }

  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <select
            id={id}
            name={name}
            value={value}
            onChange={handleChange}
            {...((register &&
              register(name, {
                required: {
                  value: required,
                  message: `${label} is required`,
                },
              })) ||
              {})}
            className="block w-full text-textBlack bg-white text-[14px] focus:outline-none rounded-[4px] p-3"
          >
            <option className="text-sm" value={""}>
              Select
            </option>
            {options?.map((option, index) => (
              <option className="" key={option[accessor]} value={option[id]}>
                {option[accessor]}
              </option>
            ))}
          </select>
        );

      case "password":
        return (
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id={id}
              name={name}
              value={value}
              onChange={handleChange}
              {...((register &&
                register(name, {
                  required: {
                    value: required,
                    message: `${label} is required`,
                  },
                })) ||
                {})}
              placeholder={placeholder}
              className="block w-full py-1   bg-white rounded-md focus:outline-none p-3 mt-3 sm:text-sm "
            />
            <div
              className="absolute inset-y-0 translate-y right-0 pr-1 flex items-center cursor-pointer"
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <img src={EyeIconClose} alt="password icon locked" />
              ) : (
                <AiOutlineEye color="#808080" size="24px" />
              )}
            </div>
          </div>
        );
      default:
        return (
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            max={max}
            min={min}
            onChange={handleChange}
            {...(register &&
              register(name, {
                disabled: disabled,
                required: {
                  value: required,
                  message: `${label} is required`,
                },
                validate: (fieldValue) => {
                  if (name === "phoneNumber") {
                    return (
                      validatePhoneNumber(fieldValue) ||
                      "Enter a valid phone number"
                    );
                  }

                  if (name === "contactPhone") {
                    return (
                      validatePhoneNumber(fieldValue) ||
                      "Enter a valid phone number"
                    );
                  }
                  if (name === "businessEmail") {
                    return (
                      validateEmail(fieldValue) || "Enter a valid email address"
                    );
                  }

                  if (name === "contactEmail") {
                    return (
                      validateEmail(fieldValue) || "Enter a valid email address"
                    );
                  }
                },
              }))}
            placeholder={placeholder}
            className="block w-full   text-textBlack bg-white focus:outline-none px-3  rounded-[4px] h-full text-[14px] "
          />
        );
    }
  };

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id}
          className={`block ${
            boldLabel ? "text-[14px] font-medium" : "text-[14px] font-medium"
          }  text-textBlack `}
        >
          {label}
        </label>
      )}
      <div
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex="0"
        className={`mb-3 w-full h-[55px] border-[1px] bg-white outline-none ${
          isFocused ? "border-primary" : "border-[#CCC]"
        } rounded-[4px]`}
      >
        {renderInput()}
      </div>
    </div>
  );
};

export default InputField;
