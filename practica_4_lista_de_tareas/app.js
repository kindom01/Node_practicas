require('colors');

const {mostrarmenu} = require('./helpers/mensajes');
const {pausa} = require('./helpers/mensajes')

console.clear();

const main = async()=>{
    console.log("hola mundo!!");

    mostrarmenu();

    //pausa();
}

main();