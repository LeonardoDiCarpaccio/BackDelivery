import { getManager, Like } from "typeorm";
import { Request, Response } from "express";
import { command } from "../../entities/command";
import { crudMethods } from "../../helpers/crudMethods";

export class commandController {
  public async getAll(request: Request, response: Response) {
    const commandRepository = getManager().getRepository(command);
    const result = await commandRepository.find({});
    response.send(result);
  }

  public async findBy(request: Request, response: Response) {
    const commandRepository = getManager().getRepository(command);

    const where = crudMethods.buildWhereClause(request.body);
    console.log(where, "where find by ");

    const result = await commandRepository.find(where);
    console.log(result, "resultat find by ");
    response.send(result);
  }

  // insert with no id, update with id
  public async save(request: Request, response: Response) {
    // console.log("fired save method");

    // console.log("request.body.id ", request.body, typeof request.body.id);
    if (typeof request.body.id === "number") {
      request.body.id = request.body.id.toString();
    }

    if (request.body.receiver_address !== undefined) {
      // console.log(
      //   "       request.body.address = request.body.receiver_address.address_line"
      // );
      request.body.address = request.body.receiver_address.address_line;
    }
    const commandRepository = getManager().getRepository(command);
    const result = await commandRepository.save(request.body);
    response.send(result);
  }
  // insert with no id, update with id
  public async saveFromScan(request: Request, response: Response) {
    // console.log("fired save method");

    // console.log("request.body.id ", request.body, typeof request.body.id);
    if (typeof request.body.id === "number") {
      request.body.id = request.body.id.toString();
    }
    if (request.body.load != undefined) {
      request.body.visit_id = request.body.id;
      request.body.id = request.body.title.toString();
      delete request.body.status;
      request.body.statusId = 1;
    }
    if (request.body.receiver_address !== undefined) {
      // console.log(
      //   "       request.body.address = request.body.receiver_address.address_line"
      // );
      request.body.address = request.body.receiver_address.address_line;
    }
    request.body.creationDate = Date.now();
    const date = new Date(); // crée un objet Date avec la date et l'heure actuelles
    const day = date.getDate().toString().padStart(2, "0"); // jour du mois, formaté sur 2 chiffres (ajoute un 0 au début si nécessaire)
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // mois (0 = janvier), formaté sur 2 chiffres (ajoute un 0 au début si nécessaire)
    const year = date.getFullYear(); // année sur 4 chiffres
    const hours = date.getHours().toString().padStart(2, "0"); // heures, formaté sur 2 chiffres (ajoute un 0 au début si nécessaire)
    const minutes = date.getMinutes().toString().padStart(2, "0");
    request.body.creationDateDisplay = `${day}/${month}/${year}-${hours}:${minutes}`;
    console.log(request.body.creationDate, "request.body.creationDate");
    const commandRepository = getManager().getRepository(command);
    const result = await commandRepository.save(request.body);
    response.send(result);
  }
  public async delete(request: Request, response: Response) {
    const commandRepository = getManager().getRepository(command);
    const result = await commandRepository.delete({ id: request.body.id });
    response.send(result);
  }
}

export const commandMethods = new commandController();
