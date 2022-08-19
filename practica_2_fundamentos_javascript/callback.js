

//setTimeout(() => {
//    console,log("hola mundo");
//}, 1000);

const getusuariobyid = (id, callback) =>{
    const usuario = {
        id,
        nombre: "pablo"
    }

    setTimeout(() => {
        callback(usuario)
    }, 1500)

}

getusuariobyid( 10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre);
});