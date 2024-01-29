const clientes = require("./clientes.json");

function encontrar (lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

console.log(encontar(cliente, 'nome', 'Kirby'));