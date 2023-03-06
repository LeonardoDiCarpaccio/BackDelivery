import { getManager, Like } from "typeorm";
import { Request, Response } from "express";
import { shipping_item } from "../../entities/shipping_item";
import { crudMethods } from "../../helpers/crudMethods";

export class shipping_itemController {
  public async getAll(request: Request, response: Response) {
    const shipping_itemRepository = getManager().getRepository(shipping_item);
    const result = await shipping_itemRepository.find({});
    response.send(result);
  }

  public async findBy(request: Request, response: Response) {
    const shipping_itemRepository = getManager().getRepository(shipping_item);

    const where = crudMethods.buildWhereClause(request.body);

    const result = await shipping_itemRepository.find(where);

    response.send(result);
  }
  // insert with no id, update with id
  public async save(request: Request, response: Response) {
    const shipping_itemRepository = getManager().getRepository(shipping_item);
    const result = await shipping_itemRepository.save(request.body);
    response.send(result);
  }

  public async delete(request: Request, response: Response) {
    const shipping_itemRepository = getManager().getRepository(shipping_item);
    const result = await shipping_itemRepository.delete({
      id: request.body.id,
    });
    response.send(result);
  }
}

export const shipping_itemMethods = new shipping_itemController();
