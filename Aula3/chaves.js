const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "apto. 934",
    }
];

const chavesDoObj = Object.keys(cliente);

console.log(chavesDoObj);

if (!chavesDoObj.includes('enderecos')){
    console.error('Erro, é necessario ter um cadastro de endereço cadastrado');
}