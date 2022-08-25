const { leerinput,
        inquirermenu,
        pausa
 } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");



const main = async() =>{

    console.clear();

    const busquedas = new Busquedas();

    let opt;

    do {
        opt = await inquirermenu();
        
        switch (opt) {
            case 1:
                const lugar = await leerinput("ciudad: ");
                await busquedas.ciudad( lugar );

                console.log("\ninformacion de la ciudad\n".red);
                console.log("ciudad:",);
                console.log("lat: ",)
                console.log("lng: ",);
                console.log("temperatura:",);
                console.log("minima:",);
                console.log("maxima:",);

                break;
        }

        await pausa();

    } while (opt !== 0);


}

main();