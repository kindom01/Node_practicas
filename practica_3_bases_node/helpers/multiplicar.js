const fs = require('fs');
const colors = require('colors');

const creararchivo = async(base = 5, listado = false , cadena = 10) =>{

    try {
    
    
        let salida = '';

    
        for (let i = 1; i <= cadena; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listado) {
            console.log("===================".rainbow);
            console.log(`tabla del ${base}`);
            console.log("===================".rainbow);

            console.log(salida);

        }
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
    
        return(`tabla-${base}`);
        
    } catch (err) {
        throw err;
    }

    

};

module.exports = {
    creararchivo: creararchivo
}