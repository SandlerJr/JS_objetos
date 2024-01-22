const dados = require('./cliente.json');

console.log(dados);
console.log('Tipo de dado desse arquivo é: ' + typeof dados);

const clienteEmString = JSON.stringify(dados);
console.log(dados);
console.log('Novo tipo de arquivo é: ' + typeof clienteEmString);

const objectCliente = JSON.parse(clienteEmString);
console.log(objectCliente);
console.log('Tipo de dado final: ' + typeof objectCliente);