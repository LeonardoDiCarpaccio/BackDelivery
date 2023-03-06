import { shipping_itemMethods } from "./shipping_itemController";

export const shipping_itemRoutes = [
  {
    path: "/shipping_item/get-all",
    method: "post",
    action: shipping_itemMethods.getAll,
  },
  {
    path: "/shipping_item/findBy",
    method: "post",
    action: shipping_itemMethods.findBy,
  },
  {
    path: "/shipping_item/save",
    method: "post",
    action: shipping_itemMethods.save,
  },
  {
    path: "/shipping_item/delete",
    method: "post",
    action: shipping_itemMethods.delete,
  },
];
