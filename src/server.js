const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  await server.start();
  // eslint-disable-next-line no-console
  console.log(`server berjalan di ${server.info.uri}`);
};

init();
