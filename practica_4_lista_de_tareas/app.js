require('colors');

const {inquirermenu} = require("./helpers/insquirer");
const {pausa} = require("./helpers/insquirer");

console.clear();

const main = async()=>{
    console.log("hola mundo!!");

    let otp = '';

    do {
        opt = await inquirermenu();
        console.log({opt});
        
        await pausa();

    } while (opt !='0');

    

}

main();