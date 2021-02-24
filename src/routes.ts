import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();

router.post("/users", userController.create);

router.post("/pesquisas", surveysController.create);
router.get("/pesquisas", surveysController.selectAll);

// router.get("/users", userController.selectAll);

// router.get("/users/id", userController.selectOne);

export { router }