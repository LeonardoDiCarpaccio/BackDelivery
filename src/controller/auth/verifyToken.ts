var jwt = require("jsonwebtoken");
import { config } from "../../../config/config";

export class verifyController {
  public async verifyToken(req, res, next) {
    var token = req.headers["x-access-token"];
    if (!token)
      return res
        .status(401)
        .send({ auth: false, message: "No token provided." });

    jwt.verify(token, config.secret, function (err, decoded) {
      if (err)
        return res
          .status(500)
          .send({ auth: false, message: "Failed to authenticate token." });
      req.userId = decoded.userId;
      next();
    });
  }
}
export const verifyMethod = new verifyController();
