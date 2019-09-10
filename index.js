const server = require('./server.js');

const PORT = process.env.NODE_ENV || 5000;

server.listen(PORT, () => {
    console.log('Listening on port', PORT);
});
