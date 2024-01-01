import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const useLogin = () => {
  const navigate = useNavigate();
  const { Login, resetPassword } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [openReset, setOpenReset] = useState(false);
  const form = useForm({
    defaultValues: {
      businessEmail: "",
      password: "",
      newPassword: "",
    },
  });
  const { register, handleSubmit, formState, setValue } = form;
  const { errors } = formState;

  const formReset = () => {
    setValue("businessEmail", "");
    setValue("password", "");
    setValue("newPassword", "");
  };

  const handleLogin = (data) => {
    try {
      setIsLoading(true);
      const isLoginSuccessful = Login(data.businessEmail, data.password);
      if (isLoginSuccessful) {
        setIsLoading(false);
        formReset();
        navigate("/dashboard");
      } else {
        setIsLoading(false);
      }

    } catch (error) {
      setIsLoading(false);
      formReset();
      toast.error("Login failed:", error.message);
    }
  };

  const handlePasswordReset = (data) => {
    try {
      const isSuccessful = resetPassword(
        data.businessEmail,
        data.password,
        data.newPassword
      );
      if (isSuccessful) {
        toast.success("Password changed successfully");
        formReset();
        setOpenReset(false);
      }
    } catch (error) {
      formReset();
      toast.error("Password change failed:", error.message);
    }
  };

  return {
    navigate,
    isLoading,
    register,
    handleSubmit,
    errors,
    handleLogin,
    handlePasswordReset,
    openReset,
    setOpenReset,
  };
};

export default useLogin;
