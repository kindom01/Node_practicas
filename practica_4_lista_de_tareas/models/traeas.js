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

    borrartarea( id = ''){

        if(this._listado[id]){
            delete this._listado[id]
        }

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

    listarpendientescompletados( completadas = true){

        let contador = 0;
        this.listadoarr.forEach((Tarea) =>{
            const {desc, completadoen} = Tarea;
            const estado = (completadoen)
                            ?'Completada'.green
                            :'Pendiente'.red;


            if(completadas){

                if (completadoen) {
                    contador += 1;
                    console.log(`${ (contador + '.').red} ${desc} ${estado}`);
                      }
             }else
                if(!completadoen){
                    contador += 1;
                    console.log(`${(contador + '.').red} ${desc} ${estado}`);
                }

        })

    }

    togglecompletadas(ids = []){
        ids.forEach( id => {

            const tarea = this._listado[id];
            if(!tarea.completadoen){
                tarea.completadoen = new Date().toISOString();
            }

        });

        this.listadoarr.forEach( tarea => {

            if( !ids.includes(tarea.id)){
                this._listado[tarea.id].completadoen = null;
            }

        });


    }

}

module.exports = tareas;