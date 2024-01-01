import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const useSignup = () => {
  const navigate = useNavigate();
  const { AddUser } = useAuth();

  const [image, setImage] = useState(null);
  const [step, setStep] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      businessEmail: "",
      phoneNumber: "",
      category: "",
      acctNumber: "",
      houseNumber: "",
      street: "",
      city: "",
      state: "",
      contactName: "",
      contactPhone: "",
      contactEmail: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match", {
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
    const payload = {
      businessName: data.name,
      businessEmail: data.businessEmail,
      phoneNumber: data.phoneNumber,
      category: data.category,
      acctNumber: data.acctNumber,
      houseNumber: data.houseNumber,
      street: data.street,
      city: data.city,
      state: data.state,
      contactName: data.contactName,
      contactPhone: data.contactPhone,
      contactEmail: data.contactEmail,
      password: data.password,
      confirmPassword: data.confirmPassword,
      image: image,
    };

    try {
      const newUser = AddUser(payload);
        toast.success("Registration successful! You can now log in.",{
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
        setOpenModal(true)
    } catch (error) {
      console.error("Registration failed:", error.message);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return {
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
  };
};

export default useSignup;
