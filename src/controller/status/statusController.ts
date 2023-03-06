import { getManager } from "typeorm";
import { Request, Response } from "express";
import { status } from "../../entities/status";
import { crudMethods } from "../../helpers/crudMethods";

export class statusController {
  public async getAll(request: Request, response: Response) {
    const statusRepository = getManager().getRepository(status);
    const result = await statusRepository.find({});
    response.send(result);
  }

  public async getById(request: Request, response: Response) {
    const statusRepository = getManager().getRepository(status);
    const result = await statusRepository.find({
      where: { id: request.body.id },
    });
    response.send(result);
  }
  public async findBy(request: Request, response: Response) {
    const statusRepository = getManager().getRepository(status);

    const where = crudMethods.buildWhereClause(request.body);

    const result = await statusRepository.find(where);

    response.send(result);
  }
  // insert with no id, update with id
  public async save(request: Request, response: Response) {
    const statusRepository = getManager().getRepository(status);
    const result = await statusRepository.save(request.body);
    response.send(result);
  }

  public async delete(request: Request, response: Response) {
    const statusRepository = getManager().getRepository(status);
    const result = await statusRepository.delete({ id: request.body.id });
    response.send(result);
  }
}

export const statusMethods = new statusController();
