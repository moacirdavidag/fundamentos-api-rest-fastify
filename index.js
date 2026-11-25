import Fastify from "fastify";

import userRoutes from "./src/routes/user-routes.js";

const fastify = Fastify({
  logger: true,
});


fastify.register(userRoutes, {
    prefix: '/usuarios'
})

// Separação de responsabilidades de uma API

// GET /usuarios 
// GET /usuarios/:id // parâmetro de url
// GET /usuarios?idade=18&cidade=bsb // query param

// POST /usuario
// PUT /usuario/:id 
// PATCH /usuario/:id
// DELETE /usuario/:id 


// Funções declaradas normalmente

fastify.get("/", function (request, reply) {
  reply.send({
    resposta: "Olá, Eduardo e Moacir David! :D",
    mensagem: "Feliz natal!",
  });
});

// Instanciar o servidor
fastify.listen(
  {
    port: 3000,
  },
  function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    fastify.log.info(`Servidor rodando em: ${address}`);
  },
);
