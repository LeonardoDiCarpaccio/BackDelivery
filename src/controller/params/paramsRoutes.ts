import { paramsMethods } from "./paramsController";

export const paramsRoutes = [
  {
    path: "/params/get-all",
    method: "post",
    action: paramsMethods.getAll,
  },
  {
    path: "/params/get",
    method: "post",
    action: paramsMethods.getById,
  },
  {
    path: "/params/save",
    method: "post",
    action: paramsMethods.save,
  },
  {
    path: "/params/delete",
    method: "post",
    action: paramsMethods.delete,
  },
  {
    path: "/params/findBy",
    method: "post",
    action: paramsMethods.findBy,
  },
  //need to use {"where": {"id": ""} for findBy id
];
