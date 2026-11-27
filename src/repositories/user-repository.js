// É responsável pelo acesso à camada de dados ou banco de dados
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

export default function UsuarioRepository() {
  const listarUsuarios = () => {
    return usuarios;
  };

  const obterUsuarioPorId = (id) => {
    const usuario = usuarios.find((user) => user.id === id);

    return usuario;
  };

  const criarUsuario = (usuario) => {
    let idUsuarios = usuarios.length;

    const idUsuario = idUsuarios + 1;
    usuarios.push({
      ...usuario,
      id: idUsuario,
    });

    return usuarios;
  };

  const excluirUsuario = (id) => {
    const indiceUsuarioParaExcluir = usuarios.findIndex(
      (user) => user.id === id,
    );

    usuarios.splice(indiceUsuarioParaExcluir, 1);

    return "Usuário excluído com sucesso!";
  };

  return {
    listarUsuarios,
    obterUsuarioPorId,
    criarUsuario,
    excluirUsuario,
  };
}
