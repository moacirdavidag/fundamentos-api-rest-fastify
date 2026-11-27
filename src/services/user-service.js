let usuarios = [
  {
    id: 1,
    nome: "Mário Eduardo",
    idade: 19,
    cidade: "Brasília",
    hobbies: "Academia",
  },
  {
    id: 2,
    nome: "Moacir David",
    idade: 24,
    cidade: "Marizópolis",
    hobbies: "Jogos, plantas, leitura, escrita",
  },
];

export default function UsuarioService() {
  const listarUsuarios = () => {
    return usuarios;
  };

  const obterUsuarioPorId = (id) => {
    const idNumerico = Number(id);

    const usuario = usuarios.find((user) => user.id === idNumerico);

    return usuario ?? null;
  };

  const criarUsuario = (usuario) => {
    // Destructuring

    const { nome, idade, cidade, hobbies } = usuario;

    let idUsuarios = usuarios.length;

    const idUsuario = idUsuarios + 1;

    const usuarioCriado = {
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

    usuarios.push({
      ...usuario,
      id: idUsuario,
    });

    return usuarioCriado;
  };

  const excluirUsuario = (id) => {
    const idNumerico = Number(id);

    const usuarioExiste = obterUsuarioPorId(id);

    if (!usuarioExiste) {
      return "usuario_nao_existe";
    }

    const indiceUsuarioParaExcluir = usuarios.findIndex(
      (user) => user.id === idNumerico,
    );

    usuarios.splice(
      indiceUsuarioParaExcluir,
      1,
    );

    return usuarios;
  };

  return {
    listarUsuarios,
    obterUsuarioPorId,
    criarUsuario,
    excluirUsuario
  };
}
