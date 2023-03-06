import { authMethods } from "./authController";

export const authRoutes = [
  {
    path: "/auth/login",
    method: "post",
    action: authMethods.login,
  },
  {
    path: "/auth/register",
    method: "post",
    action: authMethods.save,
  },
  {
    path: "/auth/check",
    method: "post",
    action: authMethods.check,
  },
];
