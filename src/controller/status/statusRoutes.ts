import { statusMethods } from "./statusController";

export const statusRoutes = [
  {
    path: "/status/get-all",
    method: "post",
    action: statusMethods.getAll,
  },
  {
    path: "/status/get",
    method: "post",
    action: statusMethods.getById,
  },
  {
    path: "/status/save",
    method: "post",
    action: statusMethods.save,
  },
  {
    path: "/status/delete",
    method: "post",
    action: statusMethods.delete,
  },
  {
    path: "/status/findBy",
    method: "post",
    action: statusMethods.findBy,
  },
  //need to use {"where": {"id": ""} for findBy id
];
