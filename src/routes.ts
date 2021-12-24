import { Router } from 'express';
import { CreateClientController } from './modules/clients/useCase/createClient/CreateClientController';


const createClientController = new CreateClientController();

const routes = Router();

routes.post('/client/', createClientController.handle)

export { routes };
