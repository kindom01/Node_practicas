const inquirer = require('inquirer');
require('../../practica_5_clima_app(cancelado por cambios en el mapbox)/node_modules/colors');


const preguntas = [{
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: [
        {
            value: 1,
            name: `${"1.".red}Buscar ciudad`
        },
        {
            value: 2,
            name: `${"2.".red}historial`
        },
        {
            value: 0,
            name: `${"0.".red}salir`
        },
    ]
}]



const inquirermenu = async()=>{
    console.clear()
    console.log('==============================='.red)
    console.log('   Seleccione una Opcion   '.red)
    console.log('===============================\n'.red)

    const {opcion} = await inquirer.prompt(preguntas);


    return opcion;
}

const pausa = async() =>{

    const question = [
        {
            type: "input",
            name: 'Enter',
            message: `Precione ${"Enter".red} para continuar`
        }
    ]

    await inquirer.prompt(question);    
}

const leerinput = async(message) =>{
    const question = {
        type: "input",
        name: "desc",
        message,
        validate(value){
            if(value.length==0){
                return "Por favor ingresa un valor"
            }
            return true;
        }
    };

    const {desc} = await inquirer.prompt(question);
    return desc;

}

const listadotareasborrar = async( tareas = []) => {
    
    const choices = tareas.map((tarea,i) =>{
        const idx = `${i + 1}`.red
        
        return{
            value: tarea.id,
            name:  `${idx} ${tarea.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0'.red + 'Cancelar'
    })

    const preguntas = [{
        type: 'list',
        name: 'id',
        message: 'borrar',
        choices
    }]

    const {id} = await inquirer.prompt(preguntas);

    return id;
}

const confirmar = async(message) => {

    const question = {
        type: 'confirm',
        name: 'okay',
        message
    }

    const {ok} = await inquirer.prompt(question);
    return ok;

}

const mostrarlistadochecklist = async( tareas = []) => {
    
    const choices = tareas.map((tarea,i) =>{
        const idx = `${i + 1}`.red
        
        return{
            value: tarea.id,
            name:  `${idx} ${tarea.desc}`,
            checked: (tarea.completadoen) ? true : false
        }
    });

    const pregunta = [{
        type: 'checkbox',
        name: 'ids',
        message: 'Selecciones',
        choices
    }]

    const {ids} = await inquirer.prompt(pregunta);

    return ids;
}



module.exports = {
    inquirermenu,
    pausa,
    leerinput,
    listadotareasborrar,
    confirmar,
    mostrarlistadochecklist
}