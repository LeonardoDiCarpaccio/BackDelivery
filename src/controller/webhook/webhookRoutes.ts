import { webhookMethods } from "./webhookController";

export const webhookRoutes = [
  {
    path: "/webhook/route_started",
    method: "post",
    action: webhookMethods.route_started,
  },
  {
    path: "/webhook/route_created",
    method: "post",
    action: webhookMethods.route_created,
  },
  {
    path: "/webhook/on_its_way",
    method: "post",
    action: webhookMethods.on_its_way,
  },
  {
    path: "/webhook/visit_checkout",
    method: "post",
    action: webhookMethods.visit_checkout,
  },
];
