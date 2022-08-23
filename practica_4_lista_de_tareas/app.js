require('colors');


const { guardardb,
        leerdb
} = require('./helpers/guardararchivo');
const {inquirermenu,
        pausa,
        leerinput,
        listadotareasborrar,
        confirmar,
        mostrarlistadochecklist
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
            case "3":
                Tareas.listarpendientescompletados();
                break;
            case "4":
                Tareas.listarpendientescompletados(false);
                break;
            case "5":
                const ids = await mostrarlistadochecklist(Tareas.listadoarr);
                Tareas.togglecompletadas(ids);
                break;
            case "6":
                const id = await listadotareasborrar(Tareas.listadoarr);
                if (id !== '0') {
                    const ok = confirmar('¿Estas seguro?');
                
                    if (ok) {
                        Tareas.borrartarea( id );
                        console.log('Tarea borrada');
                    }
                }         
                break;
        }

        
        guardardb( Tareas.listadoarr );


        await pausa();

    } while (opt !='0');

    

}

main();