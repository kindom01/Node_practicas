require('colors');


const mostrarmenu = () => {
    
    return new Promise(resolve =>{

        console.clear()
        console.log('==============================='.red)
        console.log('   Seleccione una Opcion   '.red)
        console.log('===============================\n'.red)

        console.log(`${"1.".red}Crear una tarea`);
        console.log(`${"2.".red}Listar tareas`);
        console.log(`${"3.".red}Listar tareas completadas`);
        console.log(`${"4.".red}Listar tareas pendientes`);
        console.log(`${"5.".red}Completar tarea(s)`);
        console.log(`${"6.".red}Borrar tarea`);
        console.log(`${"0.".red}Salir \n`);

        const readline = require('readline').createInterface ({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opción: ', (opt) => {
            readline.close();
            resolve(opt);
        })

    })

    


}

const pausa = () =>{

    return new Promise(resolve =>{

        const readline = require('readline').createInterface ({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`Precione ${"Enter".red} para continuar`, (opt) => {
            readline.close();
            resolve();
        })
    })
    
}


module.exports = {
    mostrarmenu,
    pausa

}