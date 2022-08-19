
const empleados = [
    {
        id: 1,
        nombre: "pablo"
    },
    {
        id: 2,
        nombre: "linda"
    },
    {
        id: 3,
        nombre: "karen"
    },
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
]

const getempleado = (id) =>{

    
    return new Promise((resolve,reject) =>{
        
        const empleado = empleados.find( (e) => e.id == id)?.nombre;

        (empleado)
            ?resolve(empleado)
            :reject(`no existe el empleado con el id ${id} `);
    });
}

const getsalario = (id) =>{

    return new Promise((resolve,reject) =>{
        const salario = salarios.find( (e) => e.id == id)?.salario;

        (salario)
            ?resolve(salario)
            :reject(`no existe el salario con el id ${id} `)
    });
}

const id = 1;

const getinfousuario = async() => {

    try{
        const empleado = await getempleado(id);
        const salario = await getsalario(id);
    
        return `el salario del empleado: ${empleado} es de: ${salario}`
    }catch(error){
        return error;
    }
    
}


getinfousuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));
