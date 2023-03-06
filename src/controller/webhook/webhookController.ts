import { getManager, In, Like } from "typeorm";
import { Request, Response } from "express";
// import { webhook } from "../../entities/webhook";
import { crudMethods } from "../../helpers/crudMethods";
import { command } from "../../entities/command";
const axios = require("axios");

export class webhookController {
  public async route_started(request: Request, response: Response) {
    const commandRepository = getManager().getRepository(command);
    const PLAN_ID = request.body;
    const API_URL = `https://prod-29.brazilsouth.logic.azure.com:443/workflows/9bbdc51b2a454888905b53d8fb56ef27/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=AvTTr_dJv4EnL1Qvh-6i78Ucb9vCNQtsMtlvCF8on5Y`;

    axios
      .post(
        API_URL,
        {
          data: PLAN_ID,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    const result = await commandRepository.update(
      { visit_id: In(request.body.visit_ids) },
      { statusId: 3 }
    );

    // const webhookRepository = getManager().getRepository(webhook);
    // const result = await webhookRepository.find({});
    // response.send(result);
  }

  public async route_created(request: Request, response: Response) {
    const commandRepository = getManager().getRepository(command);
    const result = await commandRepository.update(
      { visit_id: In(request.body.visit_ids) },
      { conductorId: request.body.driver.id, statusId: 2 }
    );
    console.log(result, "result updated successfully");
    // const webhookRepository = getManager().getRepository(webhook);
    // const where = crudMethods.buildWhereClause(request.body);
    // const result = await webhookRepository.find(where);
    // response.send(result);
  }
  // insert with no id, update with id
  public async on_its_way(request: Request, response: Response) {
    // const webhookRepository = getManager().getRepository(webhook);
    // const result = await webhookRepository.save(request.body);
    // console.log(result, "result");
    // response.send(result);
  }

  public async visit_checkout(request: Request, response: Response) {
    // const webhookRepository = getManager().getRepository(webhook);
    // const result = await webhookRepository.delete({ id: request.body.id });
    // response.send(result);
  }
}

export const webhookMethods = new webhookController();
