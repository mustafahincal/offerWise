import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { User } from "@/types/user";
import { LoginRequest, RegisterRequest } from "@/types/auth";
import { fetchLogin, fetchRegister } from "@/api/auth";
import axios from "axios";

export const AuthContext = createContext<any>(null);

type props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<props> = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const [token, setToken] = useState<string | undefined>();
  const router = useRouter();

  useEffect(() => {
    axios
      .get(
        `${
          process.env.NEXT_PUBLIC_BASE_ENDPOINT
        }/users/g-token/${localStorage.getItem("user_id")}`
      )
      .then((response) => {
        if (response.data.success && localStorage.getItem("user_id")) {
          const token_user = JSON.parse(response.data.token_user);
          setCurrentUser(token_user.user);
          setToken(token_user.token);
          setLogged(true);
        } else {
          router.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    /* if (localStorage.getItem("token")) {
      setCurrentUser(JSON.parse(localStorage.getItem("userInfo") || "{}"));
      setLogged(true);
    } else {
      router.push("/login"); */
  }, []);

  /* const getUserToken = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/users/token");
      if (response.data.success) {
        const parsedTokenUser = JSON.parse(response.data.token);
        setCurrentUser(parsedTokenUser.user);
        setLogged(true);
      } else {
        console.log(response.data.message);
        router.push("/login");
      }
    } catch (err: any) {
      console.log(err);
    }
  }; */

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
          /* 
          localStorage.setItem(
            "userInfo",
            JSON.stringify({
              _id: response.data.user._id,
              name: response.data.user.name,
              email: response.data.user.email,
            })
          ); */
          localStorage.setItem("token", response.data.user.token);
          localStorage.setItem("user_id", response.data.user._id);
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
    // localStorage.removeItem("userInfo");
    axios
      .get(
        `${
          process.env.NEXT_PUBLIC_BASE_ENDPOINT
        }/users/d-token/${localStorage.getItem("user_id")}`
      )
      .then((response) => {
        //console.log(response);
        localStorage.removeItem("user_id");
        localStorage.removeItem("token");
      })
      .catch((err) => {
        //console.log(err);
      });
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
