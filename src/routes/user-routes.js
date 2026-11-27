import Fastify from "fastify";

import UserControlller from "../controllers/user-controller.js";


const userController = new UserControlller();

export default function userRoutes(app) {
  app.get("/", userController.listarUsuarios);
  app.get('/:id', userController.listarUsuarioPorId);
  app.post('/', userController.criarUsuario);
  app.delete('/:id', userController.excluirUsuario)
}


