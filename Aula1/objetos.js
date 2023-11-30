const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
};
  
//Acessando o valor do objeto
console.log(cliente);

//Manipulando valor do objeto
console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);
console.log(`Os 3 primeiros digitos do CPF são "${cliente.cpf.substring(0, 3)}********" `)