import { LoginRequest, RegisterRequest } from "@/types/auth";
import axios from "./axiosInstance";

export const fetchLogin = (loginInput: LoginRequest) =>
  axios.post("/users/login", loginInput);

export const fetchRegister = (registerInput: RegisterRequest) =>
  axios.post("/users/register", registerInput);
