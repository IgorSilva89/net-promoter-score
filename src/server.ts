import express from 'express';

const app = express();

/**
 * Esta opção cria o servidor. Importante lembrar de setar uma porta que não esteja sendo utilizada
 */
app.listen(3333, () => console.log('teste'));
