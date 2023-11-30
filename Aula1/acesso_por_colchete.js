const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
};

//Manipulando valor do objeto
console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente['idade']} anos.`);

//Com colchetes podemos acessar o valor sem saber os campos
const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});
