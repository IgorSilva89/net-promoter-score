import { Request, Response } from 'express';
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";

class SurveysController {

    async create(request: Request, response: Response) {
        const body = request.body;

        const surveysRepository = getCustomRepository(SurveysRepository);

        const pesquisas = surveysRepository.create({
            title: body.title,
            description: body.description,

        })
        console.log(body);
        
        await surveysRepository.save(pesquisas);
        
        /**
         * Status padrão definindo que estou criando alguma coisa
         */
        return response.status(201).json(pesquisas)

    }

    async selectAll(request: Request, response: Response) {
        const surveysRepository = getCustomRepository(SurveysRepository);

        return response.json(await surveysRepository.find());

    }
}

export { SurveysController }