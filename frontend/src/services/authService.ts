import api from "./api";

export interface RegisterRequest {
  email: string;
  name: string;
  password: string;
  role: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export const registerUser = async (data: RegisterRequest) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};

export const loginUser = async (data: LoginRequest) => {
  const res = await api.post("/auth/login", data);

  const token = res.data.accessToken;
  localStorage.setItem("token", token);

  return res.data;
};

export const getUserContent = async () => {
  const res = await api.get("/user");
  return res.data;
};

export const getAdminContent = async () => {
  const res = await api.get("/admin");
  return res.data;
};

export const getUserByEmail = async (email: string) => {
  const res = await api.get(`/user/email/${email}`);
  return res.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};