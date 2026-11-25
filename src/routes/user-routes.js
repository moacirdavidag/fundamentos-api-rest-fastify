import Fastify from "fastify";

import UserControlller from "../controllers/user-controller.js";


const userController = new UserControlller();

export default function userRoutes(app) {
  app.get("/", userController.listarUsuariosController);
  app.get('/:id', userController.listarUsuarioPorIdController);
  app.post('/', userController.criarUsuarioController)
}


