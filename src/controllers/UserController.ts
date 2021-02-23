import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';

class UserController {

    async create(request: Request, response: Response) {
        const body = request.body;

        const usersRepository = getRepository(User);

        /**
         * findOne é como se fosse um select * from where email = "email". Retornará sempre 1
         */
        const userAlreadExists = await usersRepository.findOne({ email: body.email })
        if (userAlreadExists) {
            return response.status(400).json({
                error: "Usuário já existe"
            })
        }

        /**
         * Sempre tem que dar o create antes do save. Não preciso pegar o id e o id create_at pq meu model que vai criar
         */
        const user = usersRepository.create({
            name: body.name,
            email: body.email,
        })

        await usersRepository.save(user);
        return response.json(user);
    }
}

export { UserController }