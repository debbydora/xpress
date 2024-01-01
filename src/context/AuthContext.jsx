import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("Verifiers");
  const [isLoading, setIsLoading] = useState(true);
  const [dataNum, setDataNum] = useState(0);

  useEffect(() => {
    // Load users from local storage
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }

    // Load authenticated user from local storage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setAuthenticatedUser(JSON.parse(storedUser));
    }

    const storedSelectedTitle = localStorage.getItem("selectedTitle");
    if (storedSelectedTitle) {
      setSelectedTitle(storedSelectedTitle);
    }
    setIsLoading(false);
  }, []);

  const AddUser = (userData) => {
    // Search for an existing user with the same email
    const existingUser = users.find(
      (user) => user.businessEmail === userData.businessEmail
    );

    if (existingUser) {
      toast.error("Email already registered");
    } else {
      // Create a new user object
      const newUser = {
        id: users.length + 1,
        ...userData,
      };

      // Update the users state with the new user
      setUsers((prevUsers) => {
        const updatedUsers = [...prevUsers, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        return updatedUsers;
      });
      return newUser;
    }
  };

  const Login = (email, password) => {
    // Check if a user with the given email exists
    const user = users.find((u) => u.businessEmail === email);

    // If no user with the given email is found
    if (!user) {
      toast.error("User does not exist");
      return false;
    }

    // Check if the password matches
    if (user.password !== password) {
      toast.error("Invalid credentials");
      return false;
    }

    // If user exists and password matches, set the authenticated user in state and store in localStorage
    setAuthenticatedUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    return true;
  };

  const resetPassword = (email, oldPassword, newPassword) => {
    // Find the user by email and old password
    const userIndex = users.findIndex(
      (u) => u.businessEmail === email && u.password === oldPassword
    );

    if (userIndex !== -1) {
      // Update the user's password
      setUsers((prevUsers) => {
        const updatedUsers = [...prevUsers];
        updatedUsers[userIndex].password = newPassword;
        return updatedUsers;
      });
      return true;
    } else {
      toast.error("Invalid email or old password");
      return false;
    }
  };

  const Logout = () => {
    setAuthenticatedUser(null);
    localStorage.removeItem("user");
  };

  const getUser = () => {
    return authenticatedUser;
  };

  const setSelected = (title) => {
    setSelectedTitle(title);
    localStorage.setItem("selectedTitle", title);
  };

  const getSelectedTitle = () => {
    return selectedTitle;
  };

  const setDataLength = (num) => {
    setDataNum(num);
  };

  const getDataNum = () => {
    return dataNum;
  };
  return (
    <AuthContext.Provider
      value={{
        users,
        AddUser,
        Login,
        Logout,
        getUser,
        resetPassword,
        getSelectedTitle,
        setSelected,
        setDataLength,
        getDataNum,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  // Ensure the hook is used within an AuthProvider
  if (!context) {
    toast.error("useAuth must be used within an AuthProvider");
  }
  return context;
};
