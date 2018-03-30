'use strict';

const Hapi = require('hapi');
const port = process.env.PORT;

const server = Hapi.server({ host: '0.0.0.0', port: port });

server.route({
  method: 'GET',
  path:'/',
  handler: function ({ query }, h) {
    console.log('request received d(o_O)b', query);

    return `Hello, I'am the server: ${port}`;
  }
});

async function start() {
  try {
    await server.start();
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();
