import UsuarioRepository from "../repositories/user-repository.js";

// É responsável por tratar os dados / regras de negócio
export default function UsuarioService() {
  const usuariosRepository = new UsuarioRepository();
  const listarUsuarios = () => {
    const usuarios = usuariosRepository.listarUsuarios();
    return usuarios;
  };

  const obterUsuarioPorId = (id) => {
    const idNumerico = Number(id);

    const usuario = usuariosRepository.obterUsuarioPorId(idNumerico);

    return usuario ?? null;
  };

  const criarUsuario = (usuario) => {
    // Destructuring

    const { nome, idade, cidade, hobbies } = usuario;

    const usuarioObjeto = {
      nome,
      idade,
      cidade,
      hobbies,
    };

    if (!nome) {
      return "nome_obrigatorio";
    }

    if (!idade) {
      return "idade_obrigatoria";
    }

    const usuarioCriado = usuariosRepository.criarUsuario(usuarioObjeto);

    return usuarioCriado;
  };

  const excluirUsuario = (id) => {
    const idNumerico = Number(id);

    const usuarioExiste = obterUsuarioPorId(idNumerico);

    if (!usuarioExiste) {
      return "usuario_nao_existe";
    }

    const resposta = usuariosRepository.excluirUsuario(idNumerico);

    return resposta;
  };

  return {
    listarUsuarios,
    obterUsuarioPorId,
    criarUsuario,
    excluirUsuario,
  };
}
