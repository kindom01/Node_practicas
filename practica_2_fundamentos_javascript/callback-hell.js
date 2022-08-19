
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

const getempleado = (id, callback) =>{

    const empleado = empleados.find( (e) => e.id == id)?.nombre;

    if (empleado) {
        callback(null, empleado);
    }else{
        callback(`empleado con id ${id} no existe`);
    }

}

const id = 3;

const getsalario = (id, callback) =>{

    const salario = salarios.find( (e) => e.id == id)?.salario;

    if (salario) {
        callback(null, salario);
    }else{
        callback(`salario con id ${id} no existe`);
    }

}

getempleado(1, (err,empleado) =>{

    if (err){
        console.log("error");
        return console.log(err);
    }
    
    getsalario(id, (err,salario) =>{
        if (err) {
            console.log("error");
            return console.log(err);
        }
    
        console.log("el empleado",empleado,"tiene un salario de:",salario)
    
    })
    
})
