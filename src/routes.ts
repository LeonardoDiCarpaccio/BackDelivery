import { roleRoutes } from "./controller/role/roleRoutes";
import { userRoutes } from "./controller/user/userRoutes";
import { commandRoutes } from "./controller/command/commandRoutes";
import { statusRoutes } from "./controller/status/statusRoutes";
import { clientRoutes } from "./controller/client/clientRoutes";
import { shipping_itemRoutes } from "./controller/shipping_item/shipping_itemRoutes";
import { authRoutes } from "./controller/auth/authRoutes";
import { paramsRoutes } from "./controller/params/paramsRoutes";
export const AppRoutes = [
  ...statusRoutes,
  ...commandRoutes,
  ...userRoutes,
  ...roleRoutes,
  ...clientRoutes,
  ...shipping_itemRoutes,
  ...paramsRoutes,
  ...authRoutes,
];
