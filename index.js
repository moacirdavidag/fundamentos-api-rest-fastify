import Fastify from 'fastify';

const fastify = Fastify({
    logger: true
});

// Funções declaradas normalmente

fastify.get('/', function (request, reply) {
    reply.send({
        resposta: 'Olá, Eduardo e Moacir David! :D',
        mensagem: "Feliz natal!"
    })
});
// Arrow functions

const pessoas = [
    {
        id: 1,
        nome: 'Eduardo',
        idade: 19,
        cidade: 'Brasília',
        setor: "Redação"
    },
    {
        id: 2,
        nome: 'Moacir David',
        idade: 24,
        cidade: "Marizópolis",
        setor: "Desenvolvimento"
    }
]


fastify.get('/pessoas/:id', (request, reply) => {

    const id = request.params.id;

    fastify.log.info(`Buscando pessoa com id: ${id}`);

    const pessoa = pessoas.find(pessoa => pessoa.id == id);

    fastify.log.info(`Pessoa encontrada: ${JSON.stringify(pessoa)}`);

    if (pessoa.setor !== "Redação") {
        fastify.log.error(`Tentativa de acesso não autorizado à pessoa com id: ${id}`);
        reply.status(403).send("Proíbido consultar pessoas que não são da redação!");
    }

    reply.send(pessoa);

})

// Instanciar o servidor
fastify.listen({
    port: 3000
}, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`Servidor rodando em: ${address}`)
})
