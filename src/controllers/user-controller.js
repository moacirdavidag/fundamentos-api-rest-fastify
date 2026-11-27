// Controller: responsável apenas por montar as respostas HTTP
// e tratar os erros, enviando os códigos corretos para o usuário / cliente

import UsuarioService from "../services/user-service.js";

export default function UserController() {
  const usuarioService = new UsuarioService();
  const listarUsuarios = (request, reply) => {
    const usuarios = usuarioService.listarUsuarios();
    return reply.status(200).send(usuarios);
  };

  const listarUsuarioPorId = (request, reply) => {
    const { id } = request.params;

    const usuario = usuarioService.obterUsuarioPorId(id);

    if (!usuario) {
      return reply.status(404).send("Usuário não encontrado!");
    }

    return reply.status(200).send(usuario);
  };

  const criarUsuario = (request, reply) => {
    const { body } = request;

    const usuario = usuarioService.criarUsuario(body);

    if (usuario === "nome_obrigatorio") {
      return reply.status(400).send("O nome do usuário é obrigatório!");
    }

    if (usuario === "idade_obrigatoria") {
      return reply.status(400).send("A idade do usuário é obrigatória!");
    }

    return reply.status(201).send(usuario);
  };

  const excluirUsuario = (request, reply) => {
    const { id } = request.params;

    const usuarioExcluido = usuarioService.excluirUsuario(id);

    if (usuarioExcluido === "usuario_nao_existe") {
      return reply.status(404).send("O usuário não existe!");
    }

    return reply.status(204).send("Usuário excluído");
  };

  return {
    listarUsuarios,
    listarUsuarioPorId,
    criarUsuario,
    excluirUsuario
  };
}
