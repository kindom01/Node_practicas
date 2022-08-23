require('colors');


const { guardardb,
        leerdb
} = require('./helpers/guardararchivo');
const {inquirermenu,
        pausa,
        leerinput
} = require("./helpers/insquirer");
const tareas = require('./models/traeas');

console.clear();

const main = async()=>{
    let opt = '';
    const Tareas = new tareas();
    const tareasdb = leerdb();

    if (tareasdb) {
      Tareas.cargartareasfromarray(tareasdb);  
    }

    do {
        opt = await inquirermenu();
        
        switch (opt) {
            case "1":
                const desc = await leerinput("descripcion: ");
                Tareas.creartarea(desc);
                break;
        
            case "2":
                Tareas.listadocompleto();
                break;
        }

        
        guardardb( Tareas.listadoarr );


        await pausa();

    } while (opt !='0');

    

}

main();