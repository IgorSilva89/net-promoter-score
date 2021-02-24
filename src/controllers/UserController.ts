import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';

class UserController {

    /**
     * Insere um usuário na tabela
     */
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

    /**
     * Deleta um usuário de acordo com o id informado
     */
    async delete(request: Request, response: Response) {
        const body = request.body;

        const usersRepository = getRepository(User);

        const usuario = await usersRepository.findOne({ id: body.id });
        if (!usuario) {
            response.status(400).json({
                message: "Usuário não encontrado na base de dados"
            })
        }

        const user = usersRepository.create({
            id: body.id,
        })

        await usersRepository.delete(user)
        return response.json(user);
    }

    /**
     * Busca todos os registros que existirem na tabela
     */
    async selectAll(request: Request, response: Response) {

        const usersRepository = getRepository(User);

        const usuarios = await usersRepository.find();

        return response.send(usuarios);
    }

    /**
     * Busca um registro de acordo com o id informado na rota
     */
    async selectOne(request: Request, response: Response) {

        const usersRepository = getRepository(User);

        const headers = request.headers.id;

        const getOne = await usersRepository.findOne(headers?.toString());

        return response.send(getOne);
    }
}

export { UserController }