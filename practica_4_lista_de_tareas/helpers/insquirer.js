const inquirer = require('inquirer');
require('colors');


const preguntas = [{
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: [
        {
            value: "1",
            name: `${"1.".red}Crear una tarea`
        },
        {
            value: "2",
            name: `${"2.".red}Listar tareas`
        },
        {
            value: "3",
            name: `${"3.".red}Listar tareas completadas`
        },
        {
            value: "4",
            name: `${"4.".red}Listar tareas pendientes`
        },
        {
            value: "5",
            name: `${"5.".red}Completar tarea(s)`
        },
        {
            value: "6",
            name: `${"6.".red}Borrar tarea`
        },
        {
            value: "0",
            name: `${"0.".red}Salir \n`
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


module.exports = {
    inquirermenu,
    pausa,
    leerinput
}