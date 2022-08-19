
const {creararchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')


console.clear();


creararchivo( argv.b, argv.l, argv.h)
    .then(nombrearchivo => console.log("fue creado con exito el archivo",nombrearchivo))
    .catch(err => console.log(err));