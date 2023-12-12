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

cliente.enderecos.push(
    {
        rua: "R. Joseph Ladder",
        numero: 337,
        apartamento: false,
    }
);

const listaApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApartamentos);
