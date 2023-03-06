import { clientMethods } from "./clientController";

export const clientRoutes = [
  {
    path: "/client/get-all",
    method: "post",
    action: clientMethods.getAll,
  },
  {
    path: "/client/findBy",
    method: "post",
    action: clientMethods.findBy,
  },
  {
    path: "/client/save",
    method: "post",
    action: clientMethods.save,
  },
  {
    path: "/client/delete",
    method: "post",
    action: clientMethods.delete,
  },
];
