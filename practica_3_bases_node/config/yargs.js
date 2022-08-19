const { option } = require('yargs');

const argv = require('yargs')
                .option('b',{
                    alias: "base",
                    type: "number",
                    demandOption: true
                })
                .option('l',{
                    alias: "lista",
                    type: "boolean",
                    demandOption: true,
                    default:false
                })
                .option('h',{
                    alias: "height",
                    type: "number",
                    default:10
                })
                .check( (argv, options) =>{
                    if( isNaN(argv.b) ){
                        throw 'la base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;