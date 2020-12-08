import { Router } from 'express';
import MainController from './controller/MainController';

// import all controllers
// import SessionController from './app/controllers/SessionController';

const Routes = new Router();

// Add routes
routes.get('/', MainController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export default Routes;
