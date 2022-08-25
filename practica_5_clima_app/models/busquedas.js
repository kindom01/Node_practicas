const axios = require('axios');


class Busquedas {

    historial = ["cdmx", "madrid", "sanjose"]

    constructor(){

    }

    async ciudad(lugar=""){

        //console.log("ciudad",lugar);

        try{
            const resp = await axios.get("https://reqres.in/api/users?page=2")
            console.log(resp);
        }catch(error){
            return [];
        }

        

    }

}

module.exports = Busquedas