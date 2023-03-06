import { getManager, Like } from "typeorm";
import { Request, Response } from "express";
import { client } from "../../entities/client";
import { crudMethods } from "../../helpers/crudMethods";
var bcrypt = require("bcryptjs");

export class clientController {
  public async getAll(request: Request, response: Response) {
    const clientRepository = getManager().getRepository(client);
    const result = await clientRepository.find({});
    response.send(result);
  }

  public async findBy(request: Request, response: Response) {
    const clientRepository = getManager().getRepository(client);

    const where = crudMethods.buildWhereClause(request.body);

    const result = await clientRepository.find(where);

    response.send(result);
  }
  // insert with no id, update with id
  public async save(request: Request, response: Response) {
    const clientRepository = getManager().getRepository(client);
    const result = await clientRepository.save(request.body);
    console.log(result, "result");
    response.send(result);
  }

  public async delete(request: Request, response: Response) {
    const clientRepository = getManager().getRepository(client);
    const result = await clientRepository.delete({ id: request.body.id });
    response.send(result);
  }
}

export const clientMethods = new clientController();
