const clientes = require("./clientes.json");

function ordenar(lista, propiedade){
    const resultado = lista.sort((a, b) =>{
        if (a[propiedade] < b[propiedade]){
            return -1;
        } else {
            if (a[propiedade] > b[propiedade]){
                return 1
            } else {
                return 0;
            }
        }
    });
    return resultado;
}

const ordenarNome = ordenar(clientes, 'nome');
console.log(ordenarNome);