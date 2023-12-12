const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo: 200,
    efetuapagamento: function(valor){
        if (valor > this.saldo){
            console.log('Erro: Saldo insuficiente!');
        } else {
            this.saldo -= valor;
            console.log(`Pagamento efetuado. Novo saldo é de ${this.saldo}`)
        }
    }
};

//compra 1: saldo insuficiente
cliente.efetuapagamento(250);

//compra 2: 
cliente.efetuapagamento(25);
