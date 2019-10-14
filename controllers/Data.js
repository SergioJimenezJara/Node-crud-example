var nombres = ["Mario", "Patricia", "Manolo", "Santi",
"David", "Oscar", "Luis", "Saul", "Aitor"];

var nombre = nombres[1];

function getName(){
    return nombre;
}

function getNames() {
    return nombres;
}

module.exports = {
    getNames: getNames,
    getName: getName
}

