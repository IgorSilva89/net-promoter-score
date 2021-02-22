import express from 'express';

const app = express();

/**
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica
 */

/**
 * http://localhost:3333/users
 * 1 param => Rota (Recurso API)
 * 2 param => request, response
 */
app.get("/", (request, response) => {
    // return response.send('Requisição feita com sucesso');
    return response.json({ message: 'Requisição get feita com sucesso' });
})

app.post("/", (request, response) => {
    return response.json({ message: 'Requisição post feita com sucesso' });
})

app.put("/", (request, response) => {
    return response.json({ message: 'Requisição put feita com sucesso' });
})

app.delete("/", (request, response) => {
    return response.json({ message: 'Requisição delete feita com sucesso' });
})

app.patch("/", (request, response) => {
    return response.json({ message: 'Requisição patch feita com sucesso' });
})


/**
 * Esta opção cria o servidor. Importante lembrar de setar uma porta que não esteja sendo utilizada
 */
app.listen(3333, () => console.log('Servidor rodando'));
