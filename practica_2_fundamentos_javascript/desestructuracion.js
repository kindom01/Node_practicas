
const deadpool = {
    nombre: "wade",
    apellido: "winston",
    poder: "regeneracion",
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}


// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

function imprimeheroe(heroe){
    const {nombre, apellido, poder, edad = 0} = heroe;
    console.log(nombre, apellido, poder, edad);
}

//imprimeheroe(deadpool);

const heroes = ['deadpool' , 'superman', 'batman'];

//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];
const [, ,h3] = heroes;


console.log(h3);
