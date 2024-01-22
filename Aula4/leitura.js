const dados = require('./cliente.json');

console.log(dados);
console.log('O tipo de dado desse arquivo é: ' + typeof dados);

const clienteEmString = JSON.stringify(dados);
console.log(dados);
console.log('O novo tipo de arquivo é: ' + typeof clienteEmString);