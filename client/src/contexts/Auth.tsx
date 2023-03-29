import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { User } from "@/types/user";
import { LoginRequest, RegisterRequest } from "@/types/auth";
import { fetchLogin, fetchRegister } from "@/api/auth";

export const AuthContext = createContext<any>(null);

type props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<props> = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setCurrentUser(JSON.parse(localStorage.getItem("userInfo") || "{}"));
      setLogged(true);
      router.push("/");
    } else {
      router.push("/login");
    }
  }, []);

  const register = (userForRegister: RegisterRequest) => {
    fetchRegister(userForRegister)
      .then((response: any) => {
        if (response.data.success) {
          toast.success("Register Successsful");
          router.push("/login");
        }
      })
      .catch((err: any) => {
        console.log(err);
        toast.error("Failed To Register");
        router.push("/register");
      });
  };
  const login = (userForLogin: LoginRequest) => {
    setLoading(true);
    fetchLogin(userForLogin)
      .then((response: any) => {
        if (response.data.success) {
          localStorage.setItem("token", response.data.user.token);
          localStorage.setItem(
            "userInfo",
            JSON.stringify({
              _id: response.data.user._id,
              name: response.data.user.name,
              email: response.data.user.email,
            })
          );
          setCurrentUser({
            _id: response.data.user._id,
            name: response.data.user.name,
            email: response.data.user.email,
          });
          setLogged(true);
          setLoading(false);
          toast.success("Login Successsful");
          router.push("/");
        } else {
          toast.error(response.data.message);
          setLoading(false);
        }
      })
      .catch((err: any) => {
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };

  const logout = () => {
    setLogged(false);
    setCurrentUser(undefined);
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    router.push("/login");
  };

  const values: any = {
    logged,
    setLogged,
    loading,
    setLoading,
    register,
    login,
    currentUser,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
