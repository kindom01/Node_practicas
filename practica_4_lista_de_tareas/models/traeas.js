const tarea = require('./tarea');

class tareas{

    _listado = {};

    get listadoarr(){
        
        const listado = []
        Object.keys(this._listado).forEach(key => {
            const Tarea = this._listado[key];
            listado.push( Tarea)
        });

        return listado;

    }

    constructor(){
        this._listado = {};
    }

    cargartareasfromarray(Tareas = []){
        Tareas.forEach( Tarea =>{
            this._listado[Tarea.id] = Tarea;
        });
        
    }

    creartarea(desc){
        const Tarea = new tarea(desc);

        this._listado[Tarea.id] = Tarea;
    }

    listadocompleto(){


        this.listadoarr.forEach((Tarea,i) =>{
            const idx = `${i + 1}`.red;
            const {desc, completadoen} = Tarea;
            const estado = (completadoen)
            ?'Completada'.green
            :'Pendiente'.red;

            console.log(`${idx} ${desc} ${estado}`)

        })

    }
}

module.exports = tareas;