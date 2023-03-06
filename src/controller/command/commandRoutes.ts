import { commandMethods } from "./commandController";

export const commandRoutes = [
  {
    path: "/command/get-all",
    method: "post",
    action: commandMethods.getAll,
  },
  {
    path: "/command/findBy",
    method: "post",
    action: commandMethods.findBy,
  },
  {
    path: "/command/save",
    method: "post",
    action: commandMethods.save,
  },
  {
    path: "/command/saveFromScan",
    method: "post",
    action: commandMethods.saveFromScan,
  },
  {
    path: "/command/delete",
    method: "post",
    action: commandMethods.delete,
  },
];
