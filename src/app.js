import express from 'express';
import Routes from './app/routes';

// import all controllers
// import SessionController from './app/controllers/SessionController';

// Add routes
// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(Routes);
  }
}

export default new App().server;
