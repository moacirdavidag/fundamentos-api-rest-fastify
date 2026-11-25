import Fastify from "fastify";

import UserControlller from "../controllers/user-controller.js";


const userController = new UserControlller();

function listarUsuarios(app) {
  return app.get("/", userController.listarUsuariosController);
}

function listarUsuarioPorId(app) {
    return app.get('/:id', userController.listarUsuarioPorIdController);
}

function criarUsuario(app) {
    return app.post('/', userController.criarUsuarioController)
}

export {
    listarUsuarios,
    listarUsuarioPorId,
    criarUsuario
}
