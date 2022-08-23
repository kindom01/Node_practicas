const { v4: uuidv4 } = require('uuid');

class tarea{
    id = "";
    desc = "";
    completadoen = null;

    constructor(desc){

        this.id = uuidv4();
        this.desc = desc;
        this.completadoen = null;

    }

}

module.exports = tarea;