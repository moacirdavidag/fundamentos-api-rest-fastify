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

let idUsuarios = usuarios.length;

export default function UserController() {
  const listarUsuariosController = (request, reply) => {
    return reply.send(usuarios);
  };

  const listarUsuarioPorIdController = (request, reply) => {
    const id = Number(request.params.id);

    const usuario = usuarios.find((user) => user.id === id);

    if (!usuario) {
      return reply.status(404).send("Usuário não encontrado!");
    }

    return reply.send(usuario);
  };

  const criarUsuarioController = (request, reply) => {
    const body = request.body;

    const usuario = {
      nome: body.nome,
      idade: body.idade,
      cidade: body.cidade,
      hobbies: body.hobbies,
      id: idUsuarios + 1,
    };

    // Seriam as regras de negócio que são tratadas, por padrão, no service

    if (!body.nome) {
        return reply.status(400).send("Nome é obrigatório!");
    }

    if (!body.idade) {
        return reply.status(400).send("Idade é obrigatório!");
    }

    usuarios.push(usuario);

    return reply.send(usuario);
  };

  return {
    listarUsuariosController,
    listarUsuarioPorIdController,
    criarUsuarioController
  };
}
