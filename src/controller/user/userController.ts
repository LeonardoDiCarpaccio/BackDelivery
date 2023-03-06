import { getManager, Like } from "typeorm";
import { Request, Response } from "express";
import { user } from "../../entities/user";
import { crudMethods } from "../../helpers/crudMethods";

export class userController {
  public async getAll(request: Request, response: Response) {
    const userRepository = getManager().getRepository(user);
    const result = await userRepository.find({});
    response.send(result);
  }

  public async findBy(request: Request, response: Response) {
    const userRepository = getManager().getRepository(user);

    const where = crudMethods.buildWhereClause(request.body);

    const result = await userRepository.find(where);

    response.send(result);
  }
  // insert with no id, update with id
  public async save(request: Request, response: Response) {
    const userRepository = getManager().getRepository(user);
    const result = await userRepository.save(request.body);

    response.send(result);
  }

  public async delete(request: Request, response: Response) {
    const userRepository = getManager().getRepository(user);
    const result = await userRepository.delete({ id: request.body.id });
    response.send(result);
  }
}

export const userMethods = new userController();
