import errorHandler from './errorHandler';
import { UserController } from '../controllers/UserController';
import { Router } from 'express';

const router = Router();

router.post('/', errorHandler(UserController.signup));

export { router as signup };
