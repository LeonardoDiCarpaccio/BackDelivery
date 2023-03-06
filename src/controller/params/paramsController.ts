import { getManager } from "typeorm";
import { Request, Response } from "express";
import { params } from "../../entities/params";
import { crudMethods } from "../../helpers/crudMethods";

export class paramsController {
  public async getAll(request: Request, response: Response) {
    const paramsRepository = getManager().getRepository(params);
    const result = await paramsRepository.find({});
    response.send(result);
  }

  public async getById(request: Request, response: Response) {
    const paramsRepository = getManager().getRepository(params);
    const result = await paramsRepository.find({
      where: { id: request.body.id },
    });
    response.send(result);
  }
  public async findBy(request: Request, response: Response) {
    const paramsRepository = getManager().getRepository(params);

    const where = crudMethods.buildWhereClause(request.body);

    const result = await paramsRepository.find(where);

    response.send(result);
  }
  // insert with no id, update with id
  public async save(request: Request, response: Response) {
    const paramsRepository = getManager().getRepository(params);
    const result = await paramsRepository.save(request.body);
    response.send(result);
  }

  public async delete(request: Request, response: Response) {
    const paramsRepository = getManager().getRepository(params);
    const result = await paramsRepository.delete({ id: request.body.id });
    response.send(result);
  }
}

export const paramsMethods = new paramsController();
