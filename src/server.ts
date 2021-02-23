import 'reflect-metadata';
import express from 'express';
import './database/index';
import { router } from './routes';

const app = express();
app.use(express.urlencoded({ extended: true })) 
app.use(express.json());
app.use(router);
/**
 * Esta opção cria o servidor. Importante lembrar de setar uma porta que não esteja sendo utilizada
 */
app.listen(3333, () => console.log('Servidor rodando'));
